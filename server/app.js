import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use('/ping', function (req, res) {
    res.send('Pong');
});

app.all('*', (req, res) => {
    res.status(404).send('OOPS! 404 page not found')
});

export default app;