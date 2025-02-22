import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// 连接数据库
connectDB();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app; 