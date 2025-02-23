import express from 'express';
import School from '../schemas/School';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const schools = await School.find().select('_id name');
        console.log('Sending schools:', schools); // 添加调试日志
        res.json(schools);
    } catch (error) {
        console.error('Error fetching schools:', error);
        res.status(500).json({ error: "Failed to fetch schools" });
    }
});

export default router; 