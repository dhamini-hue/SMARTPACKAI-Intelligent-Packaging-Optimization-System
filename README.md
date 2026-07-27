<<<<<<< HEAD
# SMARTPACKAI: Intelligent Packaging Optimization System

An AI-powered system that recommends optimal packaging (box size, arrangement, and protective materials) for shipping items to minimize volumetric weight, reduce shipping cost, and ensure product safety.

## 🚀 Features
- **Frontend Dashboard:** Modern, vibrant React dashboard using Vite and Tailwind CSS.
- **Backend API:** Fast, robust backend built using FastAPI.
- **PostgreSQL Database:** Storing logic models, boxes, materials, and sessions.
- **ML/Logic Module:** Rule-based fallback & Python-generated datasets for data science integration.
- **Docker Compose:** End-to-end containerized setup.

---

## 🛠️ Project Structure
```
c:\smartpack-ai\
├── backend/                  # FastAPI Application
│   ├── app/                  # Main source package
│   │   ├── models/           # DB schema, pydantic models
│   │   ├── routes/           # API endpoints (optimize, inventory)
│   │   └── services/         # Business logic (bin packing, cost calculcations)
│   ├── requirements.txt      # Python dependencies
│   └── Dockerfile            # Container definition
├── frontend/                 # React Application (Vite)
│   ├── src/                  # React components & UI (Tailwind CSS)
│   ├── package.json          # React dependencies
│   └── Dockerfile            # Container definition 
├── db/                       # Database scripts
│   └── init.sql              # Init DB schema and seed boxes/materials
├── scripts/                  # Data science utilities
│   └── dataset_generator.py  # Script generating synthetic data CSV
└── docker-compose.yml        # Orchestrates the containers
```

---

## 💻 Local Setup & Execution

### Option 1: Docker (Recommended)
1. Ensure Docker Desktop is installed and running.
2. Run the deployment:
   ```bash
   docker-compose up --build
   ```
3. Open the UI at: `http://localhost:5173`
4. Access API docs at: `http://localhost:8000/docs`

### Option 2: Manual Setup

#### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

#### Frontend
=======
# SMARTPACKAI-Intelligent-Packaging-Optimization-System

SMARTPACKAI is an AI-powered packaging optimization system that recommends the most suitable packaging solution based on product dimensions, weight, fragility, and destination. It helps reduce shipping costs, optimize space utilization, and improve product safety.

## 🚀 Features

* 📦 Intelligent box recommendation
* 📊 Shipping cost & volumetric weight estimation
* 🛡️ Fragility-based packaging suggestions
* ⚡ FastAPI REST APIs
* 🎨 React + Tailwind CSS dashboard
* 🗄️ PostgreSQL database integration
* 🐳 Docker support
* 🤖 Synthetic dataset generation

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** FastAPI, Python
* **Database:** PostgreSQL
* **ML:** Pandas, NumPy, Scikit-learn
* **Deployment:** Docker & Docker Compose

## 📂 Project Structure

```text
backend/        # FastAPI backend
frontend/       # React frontend
db/             # Database scripts
scripts/        # Dataset generation
data/           # Generated datasets
docker-compose.yml
README.md
```

## ⚙️ Getting Started

### Using Docker

```bash
docker-compose up --build
```

### Manual Setup

**Backend**

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend**

>>>>>>> 992627a9e2c69cd3d58b88570a4ee553e5349f45
```bash
cd frontend
npm install
npm run dev
```

<<<<<<< HEAD
---

## 📊 Dataset Generation
A script has been provided to generate pseudo-realistic datasets mapping materials to fragility.
```bash
python scripts/dataset_generator.py
```
This drops `synthetic_packaging_data.csv` inside `/data/` which can be used to build custom Random Forest pipelines.

---

## 🔗 API Design Reference

**POST** `/api/optimize-packaging`
Request Payload:
```json
{
  "length": 20.0,
  "width": 15.0,
  "height": 10.0,
=======
## 📊 API Endpoint

**POST** `/api/optimize-packaging`

### Sample Request

```json
{
  "length": 20,
  "width": 15,
  "height": 10,
>>>>>>> 992627a9e2c69cd3d58b88570a4ee553e5349f45
  "weight": 2.5,
  "quantity": 3,
  "material": "glass",
  "fragility": "high",
  "destination": "USA"
}
```

<<<<<<< HEAD
Response JSON containing recommended box, packaging materials, utilization percentage, space cost savings, and volumetric weight estimates.
=======
## 📈 Future Improvements

* Machine Learning-based optimization
* AWS deployment
* IoT integration
* 3D packing optimization


## 👩‍💻 Author

**Dhamini B**

>>>>>>> 992627a9e2c69cd3d58b88570a4ee553e5349f45
