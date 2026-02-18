import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// connect database
await connectDB();

// middleware
app.use(cors({
  origin: "https://neura-blog-mu.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.status(200).send("API is Working");
});

// routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// IMPORTANT FOR RAILWAY
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
