from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
import hashlib

# ------------------------
# Password Hashing
# ------------------------

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def _pre_hash(password: str) -> str:
    # Convert to SHA256 first (fixes 72 byte limit issue)
    return hashlib.sha256(password.encode("utf-8")).hexdigest()

def hash_password(password: str):
    return pwd_context.hash(_pre_hash(password))

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(_pre_hash(plain_password), hashed_password)

# ------------------------
# JWT Token
# ------------------------

SECRET_KEY = "supersecretkey123"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
