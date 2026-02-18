import express from "express";
import cors from "cors";
import 'dotenv/config';

import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// CORS
app.use(cors({
  origin: "https://neura-blog-mu.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options("*", cors());

// Body parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Connect DB on every invocation safely
await connectDB();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("API is Working");
});

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// DO NOT use app.listen()

export default app;
