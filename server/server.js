import { config } from "dotenv";
config();


import app from './app.js';

const PORT = process.env.PORT || 7000;

app.listen(PORT, async () => {
    console.log(`App is running at http://localhost:${PORT}`);
});