import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({
      error: "Question is required"
    });
  }

  try {
    const comp = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: "You are a medical assistant. Answer simply without prescriptions."
        },
        {
          role: "user",
          content: question
        }
      ]
    });

    const answer = comp.choices[0].message.content;

    res.json({ answer });

  } catch (error) {
    res.status(500).json({
      error: "AI request failed"
    });
  }
});

export default router;