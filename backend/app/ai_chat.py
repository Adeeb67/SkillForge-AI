from fastapi import APIRouter
from pydantic import BaseModel
import requests

router = APIRouter()

# simple memory storage
USER_RESUME = ""


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat_ai(data: ChatRequest):

    global USER_RESUME

    prompt = f"""
You are SkillForge AI — a professional career assistant.

User Resume:
{USER_RESUME}

User Question:
{data.message}

Give helpful career guidance using the resume context.
"""

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "phi3",
                "prompt": prompt,
                "stream": False,
            },
        )

        result = response.json()
        reply = result.get("response", "No response")

        return {"reply": reply}

    except Exception as e:
        print("AI ERROR:", e)
        return {"reply": "⚠️ AI server not reachable"}
