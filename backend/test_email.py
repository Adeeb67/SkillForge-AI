import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("EMAIL_USER")
PASS = os.getenv("EMAIL_PASS")

print("Trying login...")

server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login(EMAIL, PASS)

print("✅ LOGIN SUCCESS")
