import smtplib
from email.message import EmailMessage
import os

EMAIL_HOST = os.environ.get("EMAIL_HOST")
EMAIL_PORT = int(os.environ.get("EMAIL_PORT", 587))
EMAIL_USER = os.environ.get("EMAIL_USER")
EMAIL_PASS = os.environ.get("EMAIL_PASS")

# ✅ fallback added (VERY IMPORTANT)
FRONTEND_URL = os.environ.get(
    "FRONTEND_URL",
    "https://skillforge-ai.vercel.app"
)

def send_reset_email(to_email: str, token: str):

    reset_link = f"{FRONTEND_URL}/reset-password/{token}"

    msg = EmailMessage()
    msg["Subject"] = "Reset Your SkillForge AI Password"
    msg["From"] = EMAIL_USER
    msg["To"] = to_email

    msg.set_content(f"""
Hello,

Click below to reset your password:

{reset_link}

This link expires in 15 minutes.

– SkillForge AI Team
""")

    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.send_message(msg)
