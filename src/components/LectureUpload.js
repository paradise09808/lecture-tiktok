import React, { useState } from 'react';
import axios from 'axios';

const LectureUpload = () => {
    const [youtubeUrl, setYoutubeUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', { url: youtubeUrl });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="youtubeUrl">YouTube URL:</label>
            <input
                type="text"
                id="youtubeUrl"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default LectureUpload;
