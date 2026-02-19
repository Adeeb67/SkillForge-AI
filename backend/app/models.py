from sqlalchemy import Column, Integer, String
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

    # Learning stats
    xp = Column(Integer, default=0)
    level = Column(Integer, default=1)
    lessons_completed = Column(Integer, default=0)
    streak = Column(Integer, default=0)
