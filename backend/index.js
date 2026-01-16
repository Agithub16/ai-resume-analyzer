require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const Groq = require('groq-sdk'); // 1. Groq require kiya

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// 2. Groq Setup (Gemini ki jagah)
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    const { jd } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: "Resume file missing!" });

    console.log("PDF mil gayi, text nikal rahe hain...");

    const data = await pdfParse(file.buffer);
    const resumeText = data.text;
    
    if (!resumeText || resumeText.length < 10) {
      return res.status(400).json({ error: "PDF se text nahi nikal paya!" });
    }

    console.log("PDF Read Successful. Groq AI ko request bhej raha hoon...");

    const prompt = `
      Analyze this Resume against the Job Description (JD).
      
      RESUME:
      ${resumeText}
      
      JOB DESCRIPTION:
      ${jd}
      
      Provide:
      1. Match Score (0-100%)
      2. Missing Keywords
      3. 3 Practical Suggestions
    `;

    // 3. Groq API Call (Llama 3 model ka use)
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile", // Ye bahut powerful aur free model hai
    });

    const resultText = chatCompletion.choices[0]?.message?.content || "AI response empty hai.";

    console.log("✅ Groq AI Response Success!");
    res.json({ analysis: resultText });

  } catch (error) {
    console.error("Main Error:", error.message);
    res.status(500).json({ error: "Analysis fail ho gaya: " + error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});






