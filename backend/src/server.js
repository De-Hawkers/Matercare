import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CONNECTDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routers/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

const allowedOrigins = [
  
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

CONNECTDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server has started on Port: ${PORT}`);
  });
});


//qbWnOzdeR23L1K5C
//mubaraqadeniyi159_db_user
