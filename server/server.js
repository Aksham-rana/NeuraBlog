import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

// CORS
app.use(cors({
  origin: "https://neura-blog-mu.vercel.app",
  methods: ["GET", "POST", "i
er", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options('*', cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.get('/', (req, res) => res.send("API is Working"));

app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// ✅ CONNECT DB safely for Vercel
let isConnected = false;

const connectDatabase = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

connectDatabase();

// Local run
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
  });
}

export default app;
