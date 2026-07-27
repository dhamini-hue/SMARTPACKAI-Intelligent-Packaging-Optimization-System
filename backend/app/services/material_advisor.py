from app.models.models import Material

def get_packaging_recommendation(db_materials, material_type: str, fragility: str) -> str:
    """
    Returns the recommended packaging material based on Database mappings.
    Falls back to a default rule if not found.
    """
    for m in db_materials:
        if m.material_type.lower() == material_type.lower() and m.fragility.lower() == fragility.lower():
            return m.recommended_packaging
            
    # Fallback Rules
    if fragility == "high":
        return "Heavy Duty Bubble Wrap + Custom Foam"
    elif fragility == "medium":
        return "Kraft Paper + Air Pillows"
    else:
        return "Standard Poly Bag or Unlined Box"
