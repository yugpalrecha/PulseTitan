import express from "express";
import { makeEmergencyCall } from "../services/callService.js";

const router = express.Router();

router.post("/", async (req, res) => {

  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).json({
      error: "Symptoms required"
    });
  }

  try {

    await makeEmergencyCall(symptoms);

    res.json({
      message: "Emergency call triggered successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: "Call failed"
    });

  }

});

export default router;