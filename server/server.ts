import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/users.routes';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});