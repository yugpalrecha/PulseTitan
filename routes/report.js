import express from "express";
import multer from "multer";
import fs from "fs/promises";
import dotenv from "dotenv";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import Groq from "groq-sdk";

dotenv.config();

const router = express.Router();

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 }
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});


async function extractPdfText(filePath) {

  const buffer = new Uint8Array(await fs.readFile(filePath));
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {

    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    text += content.items.map(item => item.str).join(" ") + "\n";

  }

  return text;
}


router.post("/", upload.single("report"), async (req, res) => {

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {

    const extractedText = await extractPdfText(req.file.path);

    const completion = await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",
      temperature: 0.1,

      messages: [
        {
          role: "system",
          content: `
Respond ONLY in JSON format.

{
"possible_conditions":[{"condition":"","confidence":0}],
"explanations":"",
"severity":"Low | Medium | High",
"risk_score":0
}
`
        },
        {
          role: "user",
          content: extractedText
        }
      ]
    });

    const rawResponse = completion.choices[0].message.content;

    let parsedData;

    try {
      parsedData = JSON.parse(rawResponse);
    } catch (error) {

      return res.status(500).json({
        error: "AI returned invalid JSON",
        rawResponse
      });

    }

    const risk = Number(parsedData.risk_score) || 0;

    let actionMessage = "";

    if (risk >= 80)
      actionMessage = "CRITICAL: Emergency services should be contacted immediately.";

    else if (risk >= 60)
      actionMessage = "HIGH RISK: Consult a doctor immediately.";

    else if (risk >= 40)
      actionMessage = "MODERATE RISK: Monitor health and schedule checkup.";

    else
      actionMessage = "LOW RISK: No immediate danger detected.";

    await fs.unlink(req.file.path);

    res.json({

      message: "Report analyzed successfully",
      possibleDiseases: parsedData.possible_conditions,
      explanation: parsedData.explanations,
      severity: parsedData.severity,
      risk,
      action: actionMessage

    });

  } catch (error) {

    if (req.file?.path) {
      await fs.unlink(req.file.path).catch(() => {});
    }

    res.status(500).json({ error: error.message });

  }

});

export default router;