import React from 'react';
import './LectureFeed.css'; // Optional CSS for styling

const LectureFeed = () => {
    return (
        <div className="lecture-feed">
            <h1>Lecture Feed</h1>
            <div className="scrolling-container">
                <div className="lecture-item">
                    <h2>Key Point 1</h2>
                    <img src="path/to/meme1.jpg" alt="Meme 1" />
                    <button onClick={() => alert('Action 1')}>Action 1</button>
                </div>
                <div className="lecture-item">
                    <h2>Key Point 2</h2>
                    <img src="path/to/meme2.jpg" alt="Meme 2" />
                    <button onClick={() => alert('Action 2')}>Action 2</button>
                </div>
                {/* Add more lecture-items as needed */}
            </div>
        </div>
    );
};

export default LectureFeed;