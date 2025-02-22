import express, { Express, Request, Response , Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/users.routes';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

const db = mongoose.connect('mongodb://127.0.0.1:27017/SustainableShare').catch(err => console.log(err));
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/users', userRoutes);

const server = app.listen(port, () => {
  console.log(`Server is live  at http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close().then(res => console.log("Database instance disconnected.")).catch(err => console.log(err));
  server.close(() => console.log('Server closed'));
});