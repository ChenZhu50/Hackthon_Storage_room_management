import express, { Express, Request, Response , Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import session from 'express-session';

import clubRoutes from './routes/clubs.routes';
import itemRoutes from './routes/items.routes';
import schoolRoutes from './routes/schools.routes';
import Club from './schemas/Club';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

// 添加数据库连接和错误处理
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database')
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// 监听数据库连接事件
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

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

app.get('/', (req: Request, res: Response) => {
  res.send('SERVER!!!');
});

app.use('/clubs', clubRoutes);
app.use('/items', itemRoutes);
app.use('/schools', schoolRoutes);

app.post('/authenticate', async (req, res) => {
  const data = req.body;
  console.log(data);
  const club = await Club.findOne({clubEmail: data.clubEmail});
  console.log(club);
  if (!club) {res.status(401).send({error: "This email is not associated with an account."}); return; }
  const passwordVerified = await bcrypt.compare(data.password, club.password);
  if (!passwordVerified) {
    res.status(401).send({error: "Incorrect password."});
    return;
  }

  const {password, ...cleanedClub} = club.toObject();
  res.status(200).json(cleanedClub);
});

const server = app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close().then(res => console.log("Database instance disconnected.")).catch(err => console.log(err));
  server.close(() => console.log('Server closed'));
});