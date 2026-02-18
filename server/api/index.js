import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import mongoose from "mongoose";

import adminRouter from "../routes/adminRoutes.js";
import blogRouter from "../routes/blogRoutes.js";

const app = express();

// middleware
app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB cached connection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {

    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: "neurablog",
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });

  }

  cached.conn = await cached.promise;

  return cached.conn;
}

// connect before routes
await connectDB();

// test route
app.get("/", (req, res) => {
  res.send("API is Working");
});

// routes
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

export default serverless(app);
