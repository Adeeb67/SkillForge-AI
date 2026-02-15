from fastapi import FastAPI, Depends, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime, timedelta
from uuid import uuid4
from email.message import EmailMessage
import smtplib
import os
import re
from dotenv import load_dotenv

# ---------------- LOAD ENV ----------------
load_dotenv()

# ---------------- DATABASE ----------------
from .database import engine, SessionLocal
from .models import Base, User
from .auth import hash_password, verify_password, create_access_token

# ---------------- ROUTERS ----------------
from app.chat import router as chat_router
from app.ai_chat import router as ai_router
from app.resume import router as resume_router
from app.recommend import router as recommend_router
from app.insights import router as insights_router   # ✅ NEW

# ---------------- CREATE APP ----------------
app = FastAPI(title="SkillForge AI API")

print("OpenAI Key Loaded:", "YES" if os.getenv("OPENAI_API_KEY") else "NO")

# ---------------- MIDDLEWARE ----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- INCLUDE ROUTERS ----------------
app.include_router(chat_router, prefix="/api")
app.include_router(ai_router, prefix="/api")
app.include_router(resume_router, prefix="/api")
app.include_router(recommend_router, prefix="/api")
app.include_router(insights_router, prefix="/api")  # ✅ ADDED

# ---------------- CREATE TABLES ----------------
Base.metadata.create_all(bind=engine)

# ---------------- RESET STORAGE ----------------
PASSWORD_RESET_TOKENS = {}
RESET_TOKEN_EXPIRY_MINUTES = 15


# ---------------- SCHEMAS ----------------
class UserCreate(BaseModel):
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class ResetPassword(BaseModel):
    password: str


# ---------------- DB SESSION ----------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------------- PASSWORD VALIDATION ----------------
def validate_password(password: str):
    if len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")

    if not re.search(r"\d", password):
        raise HTTPException(400, "Password must contain a number")


# ---------------- ROOT ----------------
@app.get("/")
def root():
    return {"message": "SkillForge AI Backend Running 🚀"}


# ---------------- SIGNUP ----------------
@app.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):

    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(400, "User already exists")

    validate_password(user.password)

    new_user = User(
        email=user.email,
        password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()

    return {"message": "User created successfully"}


# ---------------- LOGIN ----------------
@app.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(400, "Invalid credentials")

    token = create_access_token({"sub": user.email})
    return {"access_token": token}


# ---------------- FORGOT PASSWORD ----------------
@app.post("/forgot-password")
def forgot_password(email: dict = Body(...), db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == email["email"]).first()

    if not user:
        raise HTTPException(404, "User not found")

    token = str(uuid4())

    PASSWORD_RESET_TOKENS[token] = {
        "email": user.email,
        "expires": datetime.utcnow()
        + timedelta(minutes=RESET_TOKEN_EXPIRY_MINUTES),
    }

    reset_link = f"{os.getenv('FRONTEND_URL')}/reset-password/{token}"

    msg = EmailMessage()
    msg["Subject"] = "Reset Your SkillForge AI Password"
    msg["From"] = os.getenv("EMAIL_USER")
    msg["To"] = user.email
    msg.set_content(f"""
Click below to reset password:

{reset_link}

Link expires in 15 minutes.
""")

    try:
        with smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
            server.send_message(msg)
    except Exception as e:
        print("Email error:", e)
        raise HTTPException(500, "Email sending failed")

    return {"message": "Reset link sent"}


# ---------------- RESET PASSWORD ----------------
@app.post("/reset-password/{token}")
def reset_password(token: str, body: ResetPassword, db: Session = Depends(get_db)):

    data = PASSWORD_RESET_TOKENS.get(token)

    if not data:
        raise HTTPException(404, "Invalid token")

    if datetime.utcnow() > data["expires"]:
        del PASSWORD_RESET_TOKENS[token]
        raise HTTPException(400, "Token expired")

    validate_password(body.password)

    user = db.query(User).filter(User.email == data["email"]).first()
    user.password = hash_password(body.password)
    db.commit()

    del PASSWORD_RESET_TOKENS[token]

    token = create_access_token({"sub": user.email})

    return {
        "message": "Password reset successful",
        "access_token": token,
    }
