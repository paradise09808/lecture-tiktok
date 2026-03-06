import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            answers: ['Berlin', 'Paris', 'Madrid', 'Rome'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
            correctAnswer: 'Mars',
        },
        {
            question: 'What is the largest mammal in the world?',
            answers: ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'],
            correctAnswer: 'Blue Whale',
        },
        {
            question: 'What is the freezing point of water?',
            answers: ['0°C', '100°C', '32°F', '50°F'],
            correctAnswer: '0°C',
        },
        {
            question: 'In which year did the Titanic sink?',
            answers: ['1912', '1905', '1898', '1920'],
            correctAnswer: '1912',
        }
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerOptionClick = (answer) => {
        if (answer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Show results
            alert(`Quiz finished! Your score is ${score + 1}/${questions.length}`);
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            <div>
                <h2>{questions[currentQuestion].question}</h2>
                {questions[currentQuestion].answers.map(answer => (
                    <button key={answer} onClick={() => handleAnswerOptionClick(answer)}>{answer}</button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
