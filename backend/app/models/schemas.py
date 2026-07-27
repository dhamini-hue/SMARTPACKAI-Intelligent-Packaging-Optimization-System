from typing import Optional, List, Dict, Any
from pydantic import BaseModel

class PackageRequest(BaseModel):
    length: float
    width: float
    height: float
    weight: float
    quantity: int
    material: str
    fragility: str
    destination: str

class BoxResponse(BaseModel):
    id: int
    name: str
    length: float
    width: float
    height: float
    max_weight: float

    class Config:
        from_attributes = True

class PackageResponse(BaseModel):
    box: BoxResponse
    arrangement: str
    packaging: str
    volumetric_weight: float
    cost_savings: float
    space_utilization: float
