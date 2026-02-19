# 🚀 SkillForge-AI — AI Career Intelligence Platform


> AI-powered career intelligence platform for resume optimization, job role prediction, ATS analysis, and smart career assistance.
> ![GitHub stars](https://img.shields.io/github/stars/Adeeb67/SkillForge-AI?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Adeeb67/SkillForge-AI?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Adeeb67/SkillForge-AI?style=for-the-badge)
![License](https://img.shields.io/github/license/Adeeb67/SkillForge-AI?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-FastAPI-blue?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)
![AI Powered](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge)


> Transforming resumes into career insights using Artificial Intelligence.

SkillForge-AI is a **full-stack AI-powered career intelligence platform** that analyzes resumes, evaluates ATS compatibility, predicts suitable job roles, and provides intelligent career guidance through modern AI systems and scalable web technologies.

---

## 🌟 Overview

SkillForge-AI helps students and professionals understand how real industry recruitment systems evaluate resumes.
The platform simulates real-world hiring intelligence by combining **AI analysis + modern dashboard UI + interactive assistant**.

Users can:

* 📄 Upload and analyze resumes
* 🤖 Interact with an AI Career Assistant
* 📊 Generate ATS compatibility scores
* 🎯 Predict suitable job roles
* 💡 Receive career improvement suggestions
* 🧠 Generate optimized resumes

---

## ✨ Key Features

✅ Resume parsing & analysis
✅ ATS (Applicant Tracking System) scoring
✅ AI-based job role prediction
✅ AI Career Assistant (Chat Interface)
✅ Resume Generator & optimization
✅ Resume library management
✅ Authentication system
✅ Floating AI chat widget
✅ Modern responsive dashboard UI
✅ Real-time frontend ↔ backend communication

---

## 🧱 System Architecture

```
Frontend (React / Next.js)
        │
        │ REST API
        ▼
Backend (FastAPI)
        │
        ▼
AI / NLP Processing Layer
```

---

## 🛠 Tech Stack

### 🔹 Frontend

* React.js / Next.js
* Vite / App Router
* Tailwind CSS
* TypeScript & JavaScript (ES6+)
* Component-based UI architecture

### 🔹 Backend

* Python
* FastAPI
* Uvicorn
* SQLite Database
* REST API Architecture

### 🔹 AI / Data Processing

* NLP-based resume analysis
* LLM-powered responses
* Career insight engine
* Resume intelligence logic

---

## 📂 Project Structure

```
SkillForge-AI/
│
├── backend/              # FastAPI server & AI logic
│   ├── app/
│   └── requirements.txt
│
├── frontend/             # React / Next.js application
│   ├── src/ or app/
│   ├── components/
│   └── package.json
│
├── docs/                 # Screenshots & documentation
├── .gitignore
└── README.md
```

---

## ⚙️ Requirements

* Node.js >= 18
* Python >= 3.10
* npm or yarn
* Git

---

## ⚙️ Local Setup Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Adeeb67/SkillForge-AI.git
cd SkillForge-AI
```

---

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend

python -m venv .venv
source .venv/bin/activate      # Mac/Linux
.venv\Scripts\activate         # Windows

pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

API Docs:

```
http://127.0.0.1:8000/docs
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000 or 5173
```

---

## 🔌 API Example

Example request:

```http
POST /analyze-resume
```

Example response:

```json
{
  "ats_score": 82,
  "recommended_role": "Data Analyst",
  "suggestions": ["Add projects", "Improve keywords"]
}
```

---

## 📸 Demo (Add Screenshots Later)

Add screenshots inside `/docs` folder:

```
/docs/dashboard.png
/docs/ai-chat.png
/docs/analysis-result.png
```

---

## 🧪 Usage

1. Signup/Login
2. Upload Resume
3. Analyze ATS Score
4. Generate Resume
5. Chat with AI Career Assistant

---

## 🚨 Known Issues

* AI chat requires backend server running.
* Missing environment variables may cause API failure.
* First load may take longer due to model initialization.

---

## 🚀 Future Improvements / Roadmap

* 🔐 OAuth Login (Google/GitHub)
* ☁️ Cloud deployment (AWS / Vercel)
* 📊 Resume history dashboard
* 🧠 Advanced ML models
* 📈 Analytics visualization
* ⚡ Real-time AI streaming responses
* 🐳 Docker containerization

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-stack application development
* REST API design
* AI integration with web applications
* Authentication & state management
* Frontend–backend communication
* Real-world software architecture

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open Pull Request 🎉

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mohammed Adeeb**
B.Tech CSE — AI & Software Development Enthusiast

GitHub: https://github.com/Adeeb67

---

## ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
🧠 Contribute ideas

---

> Built with passion to empower careers using AI.
