from sqlalchemy import Column, Integer, String, Float, JSON, DateTime
from .database import Base
from sqlalchemy.sql import func

class Box(Base):
    __tablename__ = "boxes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    length = Column(Float, nullable=False)
    width = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    max_weight = Column(Float, nullable=True)

class Material(Base):
    __tablename__ = "materials"

    id = Column(Integer, primary_key=True, index=True)
    material_type = Column(String(50), nullable=False)
    fragility = Column(String(20), nullable=False)
    recommended_packaging = Column(String(255), nullable=False)

class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, index=True)
    input_data = Column(JSON, nullable=False)
    output_data = Column(JSON, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
