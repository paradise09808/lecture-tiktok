-- Database schema for lecture-tiktok

-- Table for storing lecture details
CREATE TABLE lectures (
    lecture_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for storing video segments
CREATE TABLE video_segments (
    segment_id INT PRIMARY KEY AUTO_INCREMENT,
    lecture_id INT,
    video_url VARCHAR(255) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (lecture_id) REFERENCES lectures(lecture_id)
);

-- Table for storing quiz questions and answers
CREATE TABLE quizzes (
    quiz_id INT PRIMARY KEY AUTO_INCREMENT,
    lecture_id INT,
    question TEXT NOT NULL,
    answer VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (lecture_id) REFERENCES lectures(lecture_id)
);

-- Table for tracking user progress
CREATE TABLE user_progress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    lecture_id INT,
    completed_segments INT DEFAULT 0,
    total_segments INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (lecture_id) REFERENCES lectures(lecture_id)
);

-- Indexes for optimizing queries
CREATE INDEX idx_lecture_id ON video_segments(lecture_id);
CREATE INDEX idx_quiz_lecture_id ON quizzes(lecture_id);
CREATE INDEX idx_user_progress_lecture_id ON user_progress(lecture_id);