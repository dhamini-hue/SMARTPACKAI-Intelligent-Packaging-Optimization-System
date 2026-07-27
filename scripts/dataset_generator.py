import pandas as pd
import numpy as np
import random
import os

def generate_packaging_dataset(num_records=1000):
    materials = ['glass', 'electronics', 'textile', 'plastic', 'metal', 'ceramics', 'wood', 'paper']
    fragility_levels = ['low', 'medium', 'high']
    
    # Material fragility typical mapping for realism
    mat_fragility_map = {
        'glass': 'high', 'electronics': 'high', 'ceramics': 'high',
        'textile': 'low', 'metal': 'low', 'wood': 'low', 'paper': 'low',
        'plastic': 'medium'
    }

    boxes = [
        {'id': 1, 'name': 'Small Box', 'l': 15.0, 'w': 10.0, 'h': 10.0},
        {'id': 2, 'name': 'Medium Box', 'l': 30.0, 'w': 20.0, 'h': 15.0},
        {'id': 3, 'name': 'Large Box', 'l': 50.0, 'w': 40.0, 'h': 30.0},
        {'id': 4, 'name': 'Extra Large Box', 'l': 80.0, 'w': 60.0, 'h': 50.0},
        {'id': 5, 'name': 'Flat Box', 'l': 40.0, 'w': 30.0, 'h': 5.0},
        {'id': 6, 'name': 'Cube Box', 'l': 20.0, 'w': 20.0, 'h': 20.0}
    ]

    data = []
    
    for _ in range(num_records):
        item_l = round(random.uniform(2.0, 70.0), 1)
        item_w = round(random.uniform(2.0, min(item_l, 50.0)), 1)
        item_h = round(random.uniform(1.0, min(item_w, 40.0)), 1)
        weight = round(random.uniform(0.1, 40.0), 2)
        qty = random.randint(1, 10)
        
        material = random.choice(materials)
        # 80% chance of typical fragility
        if random.random() < 0.8:
            fragility = mat_fragility_map[material]
        else:
            fragility = random.choice(fragility_levels)
            
        # Estimate needed volume based on stacking loosely
        total_vol = item_l * item_w * item_h * qty
        
        # Rule of thumb for box selection (smallest that fits volume + extra 20% for padding)
        target_vol = total_vol * 1.2
        
        # Also need to check if max dimension fits
        max_dim = max(item_l, item_w, item_h)
        
        best_box_name = "Custom Box Required"
        best_vol_weight = 0.0
        
        # Sort boxes by volume
        boxes_sorted = sorted(boxes, key=lambda x: x['l']*x['w']*x['h'])
        for b in boxes_sorted:
            box_vol = b['l'] * b['w'] * b['h']
            box_max_dim = max(b['l'], b['w'], b['h'])
            if box_vol >= target_vol and box_max_dim >= max_dim:
                best_box_name = b['name']
                # Volumetric Weight = (L * W * H) / 5000 (standard cm-based formula)
                best_vol_weight = round(box_vol / 5000.0, 2)
                break
                
        # If none fits, use volumetric of Custom Box based on item dimensions
        if best_box_name == "Custom Box Required":
            req_l, req_w, req_h = item_l + 2, item_w + 2, (item_h * qty) + 2
            best_vol_weight = round((req_l * req_w * req_h) / 5000.0, 2)

        data.append({
            'item_length': item_l,
            'item_width': item_w,
            'item_height': item_h,
            'weight': weight,
            'quantity': qty,
            'material': material,
            'fragility': fragility,
            'best_box': best_box_name,
            'volumetric_weight': best_vol_weight
        })

    df = pd.DataFrame(data)
    out_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(os.path.dirname(out_dir), "data")
    os.makedirs(data_dir, exist_ok=True)
    out_path = os.path.join(data_dir, 'synthetic_packaging_data.csv')
    df.to_csv(out_path, index=False)
    print(f"Generated {num_records} records to {out_path}")

if __name__ == "__main__":
    generate_packaging_dataset()
