import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// ✅ FIX CORS properly (IMPORTANT)
app.use(cors({
  origin: "https://neura-blog-mu.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// ✅ Handle preflight requests
app.options('*', cors());

// ✅ Body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ✅ Connect DB
await connectDB();

// Routes
app.get('/', (req, res) => res.send("API is Working"));

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// ❌ REMOVE app.listen for Vercel
// Only use locally if needed
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
  });
}

// ✅ REQUIRED for Vercel
export default app;
