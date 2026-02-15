from fastapi import APIRouter
from pydantic import BaseModel
import openai

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat_ai(data: ChatRequest):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a resume and career assistant."},
            {"role": "user", "content": data.message}
        ]
    )

    return {
        "reply": response.choices[0].message.content
    }
