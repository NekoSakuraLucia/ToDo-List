import express from 'express';
import { connectDB } from './connection/DBConnect.js';
import { router } from './routes/todo.js';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

connectDB(process.env.MONGO_URI);
const app = express();
app.use(express.json());
app.use(cors());
app.use('/todos', router);

app.listen(3000, () => console.log('Server running on port 3000'));
