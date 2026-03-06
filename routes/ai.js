const express = require('express');
const OpenAI = require('openai-api');

const router = express.Router();
const openai = new OpenAI(process.env.OPENAI_API_KEY);  // Ensure you set your OpenAI API key in environment variables

// Route to summarize lectures
router.post('/summarize', async (req, res) => {
    const { lectureText } = req.body;
    try {
        const response = await openai.complete({
            engine: 'davinci',
            prompt: `Summarize the following lecture: ${lectureText}`,
            maxTokens: 150,
            n: 1,
            stop: ['
', 'END'],
        });
        res.json({ summary: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Failed to summarize lecture' });
    }
});

// Route to generate quizzes
router.post('/quiz', async (req, res) => {
    const { lectureText } = req.body;
    try {
        const response = await openai.complete({
            engine: 'davinci',
            prompt: `Generate quiz questions based on the following lecture: ${lectureText}`,
            maxTokens: 150,
            n: 1,
            stop: ['
', 'END'],
        });
        res.json({ quiz: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
});

// Route to create meme captions
router.post('/meme-caption', async (req, res) => {
    const { context } = req.body;
    try {
        const response = await openai.complete({
            engine: 'davinci',
            prompt: `Create a meme caption for the following context: ${context}`,
            maxTokens: 50,
            n: 1,
            stop: ['
', 'END'],
        });
        res.json({ caption: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate meme caption' });
    }
});

// Route to extract key points
router.post('/key-points', async (req, res) => {
    const { lectureText } = req.body;
    try {
        const response = await openai.complete({
            engine: 'davinci',
            prompt: `Extract key points from the following lecture: ${lectureText}`,
            maxTokens: 150,
            n: 1,
            stop: ['
', 'END'],
        });
        res.json({ keyPoints: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Failed to extract key points' });
    }
});

module.exports = router;
