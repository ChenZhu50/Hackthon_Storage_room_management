import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all users');
})

export default router;