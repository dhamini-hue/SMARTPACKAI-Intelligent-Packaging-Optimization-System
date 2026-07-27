from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.routes import optimize, inventory
from app.models.database import engine, Base

# Create tables if not exists
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SMARTPACKAI", description="Intelligent Packaging Optimization System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(optimize.router, prefix="/api", tags=["Packaging"])
app.include_router(inventory.router, prefix="/api", tags=["Inventory"])

@app.get("/")
def health_check():
    return {"status": "ok", "app": "SMARTPACKAI Backend"}
