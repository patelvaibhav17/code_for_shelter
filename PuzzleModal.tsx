import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { Level, Question } from '../types/game';

interface PuzzleModalProps {
  level: Level;
  questions: Question[];
  levelNumber: number;
  onComplete: (correct: boolean, points: number) => void;
  onClose: () => void;
}

const PuzzleModal: React.FC<PuzzleModalProps> = ({
  level,
  questions,
  levelNumber,
  onComplete,
  onClose
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per puzzle
  const [showHint, setShowHint] = useState(false);
  
  const currentQuestion = questions[levelNumber] || questions[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(true); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (timeUp: boolean = false) => {
    if (showResult) return;

    const correct = !timeUp && selectedAnswer === currentQuestion.correctAnswer.toString();
    setIsCorrect(correct);
    setShowResult(true);

    // Calculate points based on time remaining and correctness
    const timeBonus = Math.floor((timeLeft / 60) * 50);
    const points = correct ? currentQuestion.points + timeBonus : 0;

    setTimeout(() => {
      onComplete(correct, points);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{level.title}</h2>
            <p className="text-sm text-gray-600 capitalize">{level.puzzleType.replace('-', ' ')} Challenge</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Timer */}
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${
              timeLeft <= 10 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
            }`}>
              <Clock size={18} />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={showResult}
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Question:</h3>
            <pre className="text-gray-700 whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {currentQuestion.question}
            </pre>
          </div>

          {/* Options */}
          {currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    showResult
                      ? option === currentQuestion.correctAnswer.toString()
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : option === selectedAnswer && option !== currentQuestion.correctAnswer.toString()
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                      : selectedAnswer === option
                      ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult && option === currentQuestion.correctAnswer.toString()
                        ? 'border-green-500 bg-green-500'
                        : showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer.toString()
                        ? 'border-red-500 bg-red-500'
                        : selectedAnswer === option
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {showResult && option === currentQuestion.correctAnswer.toString() && (
                        <CheckCircle size={16} className="text-white" />
                      )}
                      {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer.toString() && (
                        <XCircle size={16} className="text-white" />
                      )}
                      {!showResult && selectedAnswer === option && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hint Button */}
        {!showResult && (
          <div className="mb-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              <Lightbulb size={18} />
              <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            </button>
            
            {showHint && (
              <div className="mt-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-sm">{level.hint}</p>
              </div>
            )}
          </div>
        )}

        {/* Result */}
        {showResult && (
          <div className="mb-6">
            <div className={`p-6 rounded-2xl border-2 ${
              isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                {isCorrect ? (
                  <CheckCircle size={32} className="text-green-500" />
                ) : (
                  <XCircle size={32} className="text-red-500" />
                )}
                <div>
                  <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? 'Correct! Well Done!' : 'Not Quite Right'}
                  </h3>
                  <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'You earned points and can move to the next level!' : 'Don\'t worry, you can try again!'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {!showResult && (
          <button
            onClick={() => handleSubmit()}
            disabled={!selectedAnswer || showResult}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 ${
              selectedAnswer && !showResult
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default PuzzleModal;