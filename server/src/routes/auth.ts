import express, { Request, Response, Router, RequestHandler } from 'express';
import User from '../models/User';

const router = express.Router();

// 登录路由
router.post('/login', (async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password }); // 调试日志

    const user = await User.findOne({ username });
    
    if (!user) {
      console.log('User not found'); // 调试日志
      return res.status(401).json({ message: '用户名或密码错误' });
    }
    
    if (user.password !== password) {
      console.log('Password incorrect'); // 调试日志
      return res.status(401).json({ message: '用户名或密码错误' });
    }

    console.log('Login successful'); // 调试日志
    res.json({ 
      message: '登录成功',
      user: {
        id: user._id,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Login error:', error); // 调试日志
    res.status(500).json({ message: '服务器错误' });
  }
}) as RequestHandler);

// 注册路由
router.post('/register', (async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Register attempt:', { username }); // 调试日志

    // 检查用户是否已存在
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: '用户名已存在' });
    }

    // 创建新用户
    const user = new User({ username, password });
    await user.save();

    console.log('Registration successful'); // 调试日志
    res.status(201).json({ 
      message: '注册成功',
      user: {
        id: user._id,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: '服务器错误' });
  }
}) as RequestHandler);

export default router;
