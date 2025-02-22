import express, { Request, Response, Router, RequestHandler } from 'express';
import User from '../models/User';

const router = express.Router();

// login in route       
router.post('/login', (async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password }); // debug log

    const user = await User.findOne({ username });
    
    if (!user) {
      console.log('User not found'); // debug log
      return res.status(401).json({ message: 'User not found' });
    }
    
    if (user.password !== password) {
      console.log('Password incorrect'); // debug log
      return res.status(401).json({ message: 'UserName or Password is incorrect' });
    }

    console.log('Login successful'); // debug log
    res.json({ 
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Login error:', error); // debug log
    res.status(500).json({ message: 'Server error' });
  }
}) as RequestHandler);

// register route
router.post('/register', (async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Register attempt:', { username }); // debug log

    // check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // create new user
    const user = new User({ username, password });
    await user.save();

    console.log('Registration successful'); // debug log
    res.status(201).json({ 
      message: 'Registration successful',
      user: {
        id: user._id,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Registration error:', error); // debug log
    res.status(500).json({ message: 'Server error' });
  }
}) as RequestHandler);

export default router;
