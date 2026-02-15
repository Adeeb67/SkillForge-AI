from fastapi import APIRouter
from pydantic import BaseModel
import requests

router = APIRouter()

class InsightRequest(BaseModel):
    resume_text: str


@router.post("/insights")
def generate_insights(data: InsightRequest):

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "phi3",
                "prompt": f"""
You are SkillForge AI.

Analyze this resume and give:
• Career role suggestions
• ATS improvements
• Missing skills
• Resume advice

Resume:
{data.resume_text}
""",
                "stream": False,
            },
            timeout=120,
        )

        result = response.json()

        return {"insights": result.get("response", "")}

    except Exception as e:
        print("INSIGHTS ERROR:", e)
        return {"insights": "⚠️ AI insights unavailable"}
