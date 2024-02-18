import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

config(); // Load environment variables from a .env file

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true,
}));

// Routes
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

app.use('/api/v1/user', userRoutes);

// Error Handling Middleware
app.use((req, res) => {
  res.status(404).send('OOPS! 404 page not found');
});

export default app;
