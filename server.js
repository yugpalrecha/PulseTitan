// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.js";
// import emergencyRoutes from "./routes/emergency.js";
// import healthscoreRoutes from "./routes/healthscore.js";
// import reportRoutes from "./routes/report.js";
// import medicalQuestionRoutes from "./routes/medicalquestion.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected Successfully"))
// .catch((err) => console.log(err));

// app.use("/api/auth", authRoutes);
// app.use("/api/emergency", emergencyRoutes);
// app.use("/api/healthscore", healthscoreRoutes);
// app.use("/api/report", reportRoutes);
// app.use("/api/medicalquestion", medicalQuestionRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server Running on Port ${PORT}`);
// });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import emergencyRoutes from "./routes/emergency.js";
import healthscoreRoutes from "./routes/healthscore.js";
import reportRoutes from "./routes/report.js";
import medicalQuestionRoutes from "./routes/medicalquestion.js";

dotenv.config();

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use("/api/healthscore", healthscoreRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/medicalquestion", medicalQuestionRoutes);

// Serve Frontend (Vite dist folder)
app.use(express.static(path.join(__dirname, "frontened/Mediai/dist")));

app.get("/*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "frontened/Mediai/dist/index.html")
    );
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});