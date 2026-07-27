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

```bash
cd frontend
npm install
npm run dev
```

## 📊 API Endpoint

**POST** `/api/optimize-packaging`

### Sample Request

```json
{
  "length": 20,
  "width": 15,
  "height": 10,
  "weight": 2.5,
  "quantity": 3,
  "material": "glass",
  "fragility": "high",
  "destination": "USA"
}
```

## 📈 Future Improvements

* Machine Learning-based optimization
* AWS deployment
* IoT integration
* 3D packing optimization


## 👩‍💻 Author

**Dhamini B**

