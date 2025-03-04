import { connectDB } from './connection/DBConnect.js';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

connectDB(process.env.MONGO_URI);
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Server running on port 3000'));
