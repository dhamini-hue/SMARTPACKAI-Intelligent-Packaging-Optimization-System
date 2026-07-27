CREATE TABLE IF NOT EXISTS boxes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    length FLOAT NOT NULL,
    width FLOAT NOT NULL,
    height FLOAT NOT NULL,
    max_weight FLOAT
);

CREATE TABLE IF NOT EXISTS materials (
    id SERIAL PRIMARY KEY,
    material_type VARCHAR(50) NOT NULL,
    fragility VARCHAR(20) NOT NULL,
    recommended_packaging VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    input_data JSONB NOT NULL,
    output_data JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed boxes
INSERT INTO boxes (name, length, width, height, max_weight) VALUES
('Small Box', 15.0, 10.0, 10.0, 5.0),
('Medium Box', 30.0, 20.0, 15.0, 10.0),
('Large Box', 50.0, 40.0, 30.0, 20.0),
('Extra Large Box', 80.0, 60.0, 50.0, 50.0),
('Flat Box', 40.0, 30.0, 5.0, 10.0),
('Cube Box', 20.0, 20.0, 20.0, 15.0);

-- Seed materials 
-- Mapping material + fragility to packaging
INSERT INTO materials (material_type, fragility, recommended_packaging) VALUES
('glass', 'high', 'Bubble Wrap + Foam Inserts'),
('electronics', 'high', 'Anti-static Bag + Foam Packing'),
('ceramics', 'high', 'Double Corrugated Box + Bubble Wrap'),
('textile', 'low', 'Poly Mailer + Paper Fill'),
('plastic', 'medium', 'Kraft Paper + Air Pillows'),
('metal', 'low', 'Minimal Protection (Corrugated Dividers)'),
('wood', 'low', 'Edge Protectors'),
('paper', 'low', 'Waterproof Slip + Cardboard Backing');
