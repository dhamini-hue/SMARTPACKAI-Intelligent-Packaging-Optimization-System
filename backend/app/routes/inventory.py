from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.database import get_db
from app.models.models import Box, Material

router = APIRouter()

@router.get("/boxes")
def get_boxes(db: Session = Depends(get_db)):
    return db.query(Box).all()

@router.get("/materials")
def get_materials(db: Session = Depends(get_db)):
    return db.query(Material).all()
