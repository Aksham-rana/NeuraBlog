import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// Connect database
await connectDB();

// Middleware
app.use(cors({
  origin: "https://neura-blog-mu.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.status(200).send("API is Working");
});

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// Export handler
export default serverless(app);
