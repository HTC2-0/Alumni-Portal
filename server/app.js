import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
config();
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());

// Server Status Check Route
app.get("/ping", (_req, res) => {
  res.send("Pong");
});

import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/user", userRoutes);
// console.log("Hello");

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

export default app;
