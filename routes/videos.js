'use strict';

const express = require('express');
const ffmpeg = require('fluent-ffmpeg');
const router = express.Router();

// Endpoint to split a video into segments
router.post('/split', (req, res) => {
    const { videoPath, segmentTime } = req.body;

    ffmpeg(videoPath)
        .inputOptions(['-ss 0'])
        .outputOptions([`-f segment`, `-segment_time ${segmentTime}`, '-reset_timestamps 1'])
        .output('output%03d.mp4')
        .on('end', () => {
            console.log('Segments created');
            res.json({ message: 'Video segments created successfully.' });
        })
        .on('error', (err) => {
            console.error('Error: ' + err.message);
            res.status(500).json({ error: 'Error processing video' });
        })
        .run();
});

// Example endpoint to get video details
router.get('/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    // Implementation for fetching video details can go here
    res.json({ message: `Details for video ID: ${videoId}` });
});

// More endpoints can be added here...

module.exports = router;
