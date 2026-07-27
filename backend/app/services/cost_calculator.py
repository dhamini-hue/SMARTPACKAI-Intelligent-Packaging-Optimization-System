def calculate_volumetric_weight(length: float, width: float, height: float) -> float:
    """
    Calculates volumetric weight using L * W * H / 5000 (standard cm).
    """
    return round((length * width * height) / 5000.0, 2)

def calculate_savings(box_vol: float, raw_item_vol: float) -> float:
    """
    Calculates the % savings from unoptimized sizing.
    Assume unoptimized uses naive bounding box + 50% buffer.
    """
    unoptimized_vol = raw_item_vol * 1.5
    if unoptimized_vol == 0:
        return 0.0
    
    savings_vol = unoptimized_vol - box_vol
    ans = (savings_vol / unoptimized_vol) * 100
    
    # Floor to 0 if we aren't saving
    return round(max(ans, 0.0), 2)
