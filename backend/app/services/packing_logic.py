from typing import List
from app.models.models import Box

def select_best_box(boxes: List[Box], item_l: float, item_w: float, item_h: float, qty: int):
    """
    Implements simple 3D bin packing logic/heuristics.
    """
    total_volume_needed = (item_l * item_w * item_h) * qty
    max_dim = max(item_l, item_w, item_h)
    
    # We add 20% padding buffer to the volume required
    target_volume = total_volume_needed * 1.2
    
    # Sort boxes by volume
    boxes.sort(key=lambda b: b.length * b.width * b.height)
    
    for box in boxes:
        box_vol = box.length * box.width * box.height
        box_max_dim = max(box.length, box.width, box.height)
        
        # Check volume requirement and basic dimension bound fit
        if box_vol >= target_volume and box_max_dim >= max_dim:
            # Generate dummy arrangement description
            arrangement = f"Stack {qty} item(s) loosely packed. Items occupy {round((total_volume_needed/box_vol)*100, 1)}% of volume."
            space_utilization = round((total_volume_needed / box_vol) * 100, 2)
            
            return {
                "box": box,
                "arrangement": arrangement,
                "space_utilization": space_utilization,
                "box_vol": box_vol,
                "total_volume_needed": total_volume_needed
            }
            
    # Default fallback to the largest box
    l_box = boxes[-1]
    box_vol = l_box.length * l_box.width * l_box.height
    utilization_perc = round((total_volume_needed / box_vol) * 100, 2)
    arrangement = f"WARNING: Items may be constrained. Stack {qty} item(s) closely."
    return {
        "box": l_box,
        "arrangement": arrangement,
        "space_utilization": utilization_perc, # Might exceed 100 on edge cases
        "box_vol": box_vol,
        "total_volume_needed": total_volume_needed
    }
