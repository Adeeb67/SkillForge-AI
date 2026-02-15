import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
FRONTEND_URL = os.getenv("FRONTEND_URL")


def send_reset_email(to_email: str, token: str):
    reset_link = f"{FRONTEND_URL}/reset-password/{token}"

    msg = EmailMessage()
    msg["Subject"] = "SkillForge AI – Password Reset"
    msg["From"] = EMAIL_USER
    msg["To"] = to_email

    msg.set_content(f"""
Hello,

You requested to reset your SkillForge AI password.

Click the link below:
{reset_link}

If you did not request this, ignore this email.

– SkillForge AI Team
""")

    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASS)
        server.send_message(msg)
