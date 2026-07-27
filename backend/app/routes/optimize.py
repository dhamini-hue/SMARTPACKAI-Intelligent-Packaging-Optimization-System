from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.database import get_db
from app.models.schemas import PackageRequest, PackageResponse
from app.models.models import Box, Material, Session as DBSession

from app.services.packing_logic import select_best_box
from app.services.material_advisor import get_packaging_recommendation
from app.services.cost_calculator import calculate_volumetric_weight, calculate_savings

router = APIRouter()

@router.post("/optimize-packaging", response_model=PackageResponse)
def optimize_packaging(request: PackageRequest, db: Session = Depends(get_db)):
    # 1. Fetch available boxes and materials
    boxes = db.query(Box).all()
    if not boxes:
        raise HTTPException(status_code=500, detail="No boxes configured in DB.")
        
    materials = db.query(Material).all()

    # 2. Packing Logic
    pack_result = select_best_box(
        boxes, request.length, request.width, request.height, request.quantity
    )
    
    # 3. Get Packaging Advice
    advice = get_packaging_recommendation(materials, request.material, request.fragility)
    
    # 4. Costs
    vol_weight = calculate_volumetric_weight(
        pack_result["box"].length, pack_result["box"].width, pack_result["box"].height
    )
    savings = calculate_savings(pack_result["box_vol"], pack_result["total_volume_needed"])

    response_data = PackageResponse(
        box=pack_result["box"],
        arrangement=pack_result["arrangement"],
        packaging=advice,
        volumetric_weight=vol_weight,
        cost_savings=savings,
        space_utilization=pack_result["space_utilization"]
    )

    # 5. Log Session
    new_session = DBSession(
        input_data=request.dict(),
        output_data=response_data.dict()
    )
    db.add(new_session)
    db.commit()

    return response_data
