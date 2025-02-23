import express from 'express';
import { Request, Response } from 'express';
import Club from '../schemas/Club';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const clubs = await Club.find({});
    res.status(200).send(clubs);
})

router.post('/create', async (req, res) => {
    try {
        const data = req.body;
        const userEmailRegistered = await Club.findOne({clubEmail: data.clubEmail}).exec();
        if (userEmailRegistered) {
            res.status(401).send({error: "This email is already registered under another club."});
        }
        const newClub = await Club.create({
            name: data.name,
            clubEmail: data.clubEmail,
            password: await bcrypt.hash(data.password, 10),
            school: data.school,
            items: []
        })
        if (!newClub) {
            res.status(401).send({error: "Failure in creating new club."});
        }
        res.status(200).send(newClub._id);
    } catch (err) {
        res.status(400).send({error: "An unknown error has occurred."});
    }
});

router.post('/testuser', async (req, res) => {
    const newClub = await Club.create({
        name: "Russian Corner",
        clubEmail: "russian@gmail.com",
        password: await bcrypt.hash("123", 10),
        school: new ObjectId(),
        items: []
    })
})

export default router;