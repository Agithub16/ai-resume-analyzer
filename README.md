# 🚀 AI Resume Analyzer | Resume Vision

An AI-powered resume analysis platform that helps job seekers improve their resumes by comparing them against job descriptions. Get intelligent feedback, identify missing skills and keywords, and improve your resume's ATS compatibility.

**🌐 Live Demo:** [Resume Vision](https://ai-resume-analyzer-chi-three.vercel.app/)

---

## ✨ Features

- 📄 **Resume Upload:** Upload your resume in PDF format.
- 🤖 **AI-Powered Analysis:** Get intelligent resume feedback using Groq LLM.
- 🎯 **Job Description Matching:** Compare your resume with a target job description.
- 📊 **Skill Gap Detection:** Identify missing skills and important keywords.
- 💡 **Improvement Suggestions:** Receive actionable recommendations to improve your resume.
- 🔐 **Authentication:** Secure Google Sign-In using Firebase Authentication.
- 📱 **Responsive Interface:** Clean and user-friendly interface.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| AI Integration | Groq API, LLM |
| Authentication | Firebase Authentication |
| File Handling | Multer, PDF Parsing |
| Deployment | Vercel, Render |

## ⚙️ How It Works

1. Sign in using Google Authentication.
2. Upload your resume in PDF format.
3. Enter the job description for your target role.
4. The backend extracts resume content and processes it with the AI model.
5. Get your resume analysis, skill gaps, missing keywords, and improvement recommendations.

## 📂 Project Structure

```text
ai-resume-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Agithub16/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

Open another terminal:

```bash
cd backend
npm install
npm start
```

## 🔑 Environment Variables

Configure the required environment variables in your local environment files.

**Backend (`backend/.env`):**

```env
PORT=10000
GROQ_API_KEY=your_groq_api_key
```

**Frontend:**

Configure your Firebase project credentials using the environment variable names referenced in your frontend Firebase configuration.

Never commit API keys, Firebase private credentials, or other secrets to GitHub.

## 🌍 Deployment

- **Frontend:** Deployed on Vercel.
- **Backend:** Deployed on Render.
- **Authentication:** Firebase Authentication.
- **AI Processing:** Groq API.

## 🎯 Project Goals

The goal of Resume Vision is to simplify resume optimization through AI-powered insights, helping job seekers better understand job requirements and present their skills effectively.

## 👨‍💻 Author

**Ayush Vardhan**

- GitHub: [@Agithub16](https://github.com/Agithub16)
- LinkedIn: [Connect with me](https://www.linkedin.com/)

---

⭐ If you find this project useful, consider giving it a star!
