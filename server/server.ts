import express, { Express, Request, Response , Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import session from 'express-session';

import clubRoutes from './routes/clubs.routes';
import itemRoutes from './routes/items.routes';
import Club from './schemas/Club';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.JWT_SECRET || 'supersecretrandomkey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
      sameSite: 'lax'
  }
}));

const db = mongoose.connect('mongodb://127.0.0.1:27017/SustainableShare').catch(err => console.log(err));
app.get('/', (req: Request, res: Response) => {
  res.send('SERVER!!!');
});

app.use('/clubs', clubRoutes);
app.use('/items', itemRoutes);

app.post('/authenticate', async (req, res) => {
  const data = req.body;
  const club = await Club.findOne({clubEmail: data.clubEmail});
  if (!club) {res.status(401).send({error: "This email is not associated with an account."}); return; }
  const passwordVerified = await bcrypt.compare(data.password, club.password);
  if (!passwordVerified) {
    res.status(401).send({error: "Incorrect password."});
    return;
  }

  const {password, ...cleanedClub} = club.toObject();
  res.status(200).json(cleanedClub);
});

const server = app.listen(8000, () => {
  console.log(`Server is live.`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close().then(res => console.log("Database instance disconnected.")).catch(err => console.log(err));
  server.close(() => console.log('Server closed'));
});