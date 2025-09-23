import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CONNECTDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

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

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

CONNECTDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server has started on Port: ${PORT}`);
  });
});
