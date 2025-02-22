import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Get all users');
})

export default router;