# Scholarly Engineer

## Project Overview
As an electronics engineering student at BVM Engineering College, I built Scholarly Engineer to streamline the management of complex academic tracks. This interactive full-stack web application combines dynamic curriculum planning with powerful data visualization and learning analytics. It serves as a comprehensive tool to map out rigorous coursework, track progress, and gain real-time performance insights.

## Key Features & Details
* **Dual-Engine Backend:** Utilizes concurrent Python microservices to handle data routing and analytics independently.
  * *Roadmap Engine:* Serves dynamic, JSON-mapped curriculum data streams.
  * *Analytics Engine:* Processes real-time performance metrics.
* **Interactive Frontend:** A highly responsive user interface designed for immediate visual feedback and seamless navigation.
* **Data Visualization:** Integrated charting components that translate raw academic data into actionable graphical insights.

## Tech Stack
This project leverages a modern, decoupled architecture:
* **Frontend:** TypeScript (57.9%), CSS (5.9%), JavaScript (4.9%), HTML (0.6%)
* **Backend:** Python (30.7%)

## Repository Structure
```text
Scholarly_Engineer/
├── backend/            # Python microservices & analytics data scripts
├── frontend/           # React/TypeScript application components
├── assets/             # Project screenshots and visual elements
├── .gitignore          # Excludes environment files (.venv, node_modules)
└── requirements.txt    # Python backend dependencies
```

## Challenges Overcome
* **Microservice Dependency & Version Resolution:** Mitigated clashes between third-party charting libraries (streamlit-echarts) and framework updates by establishing strict environment isolation and exact version lock-ins (streamlit==1.41.0).
* **Dual-Backend Architecture Coordination:** Orchestrated multiple Python microservices (ports 8502 and 8503) running concurrently alongside a decoupled React/Vite frontend, managing local JSON data generation synchronization and multi-port hosting.
* **Workspace Optimization & Version Control:** Established a disciplined repository layout by refactoring duplicate structures and configuring robust .gitignore patterns to exclude heavy development dependencies, ensuring a lightweight, production-ready remote repository.

## Future Plans
* **Robotics Competency Integration:** Expanding the Roadmap Engine's data structure to map out specialized technical pathways—such as advanced embedded systems, firmware architecture, or printed circuit board routing tracks—to prepare candidates for rigorous technical engineering selections.
* **Hardware Telemetry Visualizations:** Upgrading the Python Analytics Engine to process live telemetry data streams from hardware simulations or microcontrollers, turning the platform into a real-time operational dashboard for system diagnostics.
* **Database Migration & Cloud Deployment:** Shifting the data layer from static local file storage (curriculum_data.json) to a persistent relational database (such as PostgreSQL) and containerizing the microservices using Docker for public cloud deployment.

## Setup & Installation

### 1. Backend Setup
Navigate to the backend folder, create your environment, and install dependencies:

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
streamlit run roadmap.py --server.port 8502
```

### 2. Frontend Setup
In a new terminal, navigate to the frontend folder and start the development server:

```bash
cd frontend
npm install
npm run dev
```
