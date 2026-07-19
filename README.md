# Scholarly Engineer

##  Project Overview
As an electronics engineering student at BVM Engineering College, I built **Scholarly Engineer** to streamline the management of complex academic tracks. This interactive full-stack web application combines dynamic curriculum planning with powerful data visualization and learning analytics. It serves as a comprehensive tool to map out rigorous coursework, track progress, and gain real-time performance insights.

##  Key Features & Details
* **Dual-Engine Backend:** Utilizes concurrent Python microservices to handle data routing and analytics independently.
  * *Roadmap Engine:* Serves dynamic, JSON-mapped curriculum data streams.
  * *Analytics Engine:* Processes real-time performance metrics.
* **Interactive Frontend:** A highly responsive user interface designed for immediate visual feedback and seamless navigation.
* **Data Visualization:** Integrated charting components that translate raw academic data into actionable graphical insights.

##  Tech Stack
This project leverages a modern, decoupled architecture:
* **Frontend:** TypeScript (57.9%), CSS (5.9%), JavaScript (4.9%), HTML (0.6%)
* **Backend:** Python (30.7%)

##  Repository Structure

```text
Scholarly_Engineer/
├── backend/            # Python microservices & analytics data scripts
├── frontend/           # React/TypeScript application components
├── assets/             # Project screenshots and visual elements
├── .gitignore          # Excludes environment files (.venv, node_modules)
└── requirements.txt    # Python backend dependencies

##  Setup & Installation

### 1. Backend Setup
Navigate to the backend folder, create your environment, and install dependencies:

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
streamlit run roadmap.py --server.port 8502

### 2. Frontend Setup
In a new terminal, navigate to the frontend folder and start the development server:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
