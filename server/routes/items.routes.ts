import express from 'express';
import { Request, Response } from 'express';
import Item from '../schemas/Item';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Get all items');
})

router.post('/create', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newItem = await Item.create(data);
        res.status(200).json(newItem);
    } catch(err) {
        res.status(400).send({error: 'An unknown error has occured.'});
    }
})

export default router;