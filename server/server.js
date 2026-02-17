import express from "express"
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
const cors = require('cors');

const app = express();
app.use(cors({
  origin: [
    'https://neura-blog-mu.vercel.app',
    'https://neura-blog-3fcj59ibr-aksham-ranas-projects.vercel.app'
  ],
  credentials: true
}));

await connectDB()

// Middleware - CORS with credentials support
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:5174"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

//Routes
app.get('/',(req, res)=>res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT  =process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('server is running on port ' + PORT)
})

export default app;