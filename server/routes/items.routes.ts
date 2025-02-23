import express from 'express';
import { Request, Response } from 'express';
import Item from '../schemas/Item';
import ItemRequest from '../schemas/Request';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const allItems = await Item.find({});
    res.status(200).json(allItems);
})

router.get('/:id', async (req: Request, res: Response) => {
    const allItems = await Item.findById(req.params.id).populate('club').populate('requests');
    if (!allItems) {
        res.status(404).send({error: "Unable to find item with specified id."});
        return;
    }
    res.status(200).json(allItems);
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

router.post('/:id/requests/create', async (req: Request, res: Response) => {
    try {
        const itemId = req.params.itemId;
        const data = req.body;
        const newRequest = await ItemRequest.create(data);
        if (!newRequest) {
            res.status(401).send({error: 'Unable to make new request.'});
            return
        }
        const updatedItem = await Item.findByIdAndUpdate(itemId, {"push": {requests: newRequest}});
        if (!newRequest) {
            res.status(401).send({error: 'Could not add requests to item.'});
            return
        }
        res.status(200).json(updatedItem);
    } catch(err) {
        res.status(400).send({error: 'An unknown error has occured.'});
    }
})
router.post('/:id/requests', async (req: Request, res: Response) => {
    try {
        const itemId = req.params.itemId;
        const item = await Item.findById(itemId).populate('requests');
        if (!item) {
            res.status(404).send({error: 'Could not access item.'});
            return
        }
        res.status(200).json(item.requests);
    } catch(err) {
        res.status(400).send({error: 'An unknown error has occured.'});
    }
})

export default router;