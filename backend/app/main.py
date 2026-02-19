from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/dashboard")
def dashboard():
    return {
        "user": "Alex",
        "hours": 42.5,
        "skills": 8,
        "bugs_fixed": 124,
        "lessons": 36
    }
