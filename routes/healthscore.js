import express from "express";

const router = express.Router();

router.post("/health-score", (req, res) => {

  const { sleep, exercise, diet, smoking, alcohol, stress } = req.body;

  if (
    sleep === undefined ||
    exercise === undefined ||
    !diet ||
    smoking === undefined ||
    !alcohol ||
    !stress
  ) {
    return res.status(400).json({
      error: "Please provide sleep, exercise, diet, smoking, alcohol, and stress."
    });
  }

  let score = 0;

  if (sleep >= 7 && sleep <= 8) score += 20;
  else if (sleep >= 6) score += 10;

  if (exercise >= 4) score += 20;
  else if (exercise >= 2) score += 10;

  if (diet === "good") score += 20;
  else if (diet === "average") score += 10;

  if (smoking === false) score += 15;

  if (alcohol === "low") score += 15;
  else if (alcohol === "moderate") score += 10;

  if (stress === "low") score += 10;
  else if (stress === "medium") score += 5;

  let status = "Poor";

  if (score >= 80) status = "Excellent";
  else if (score >= 60) status = "Good";
  else if (score >= 40) status = "Average";

  const suggestions = [];

  if (sleep < 7) suggestions.push("Sleep at least 7–8 hours daily.");
  if (exercise < 3) suggestions.push("Increase physical activity.");
  if (diet !== "good") suggestions.push("Improve diet.");
  if (smoking === true) suggestions.push("Avoid smoking.");
  if (alcohol === "high") suggestions.push("Reduce alcohol consumption.");
  if (stress === "high") suggestions.push("Practice stress management.");

  res.json({
    health_score: score,
    status,
    suggestions
  });

});

export default router;