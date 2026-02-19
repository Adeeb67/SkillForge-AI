from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine, get_db
from . import models, schemas, auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="SkillForge AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "SkillForge AI Backend Running"}


# ---------------- SIGNUP ----------------
@app.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = models.User(
        email=user.email,
        password=auth.hash_password(user.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    token = auth.create_access_token({"sub": user.email})

    return {"access_token": token, "token_type": "bearer"}


# ---------------- LOGIN ----------------
@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = auth.authenticate_user(db, user.email, user.password)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = auth.create_access_token({"sub": db_user.email})

    return {"access_token": token, "token_type": "bearer"}
    # ---------------- CURRENT USER ----------------
@app.get("/me")
def get_me(current_user: models.User = Depends(auth.get_current_user)):
    return {
        "email": current_user.email,
        "xp": current_user.xp,
        "level": current_user.level,
        "lessons_completed": current_user.lessons_completed,
        "streak": current_user.streak,
    }

# ---------------- ADD XP ----------------
@app.post("/add-xp")
def add_xp(
    amount: int,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(get_db),
):
    current_user.xp += amount

    # Level system (every 100 XP = level up)
    current_user.level = current_user.xp // 100 + 1

    current_user.lessons_completed += 1

    db.commit()
    db.refresh(current_user)

    return {
        "xp": current_user.xp,
        "level": current_user.level,
        "lessons_completed": current_user.lessons_completed,
    }
from .ai_service import generate_ai_response


# ---------------- AI TUTOR ----------------
@app.post("/ai-tutor")
def ai_tutor(
    question: str,
    current_user: models.User = Depends(auth.get_current_user),
):
    answer = generate_ai_response(question)

    return {
        "question": question,
        "answer": answer
    }
