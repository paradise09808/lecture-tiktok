const express = require('express');
const router = express.Router();

// Mock data for lectures
let lectures = [];

// GET all lectures
router.get('/', (req, res) => {
    res.status(200).json(lectures);
});

// POST a new lecture
router.post('/', (req, res) => {
    const { title, speaker, date } = req.body;
    if (!title || !speaker || !date) {
        return res.status(400).json({ message: 'Title, speaker, and date are required.' });
    }
    const newLecture = { title, speaker, date, id: lectures.length + 1 };
    lectures.push(newLecture);
    res.status(201).json(newLecture);
});

module.exports = router;
