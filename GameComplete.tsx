import React from 'react';
import { Trophy, Home, RotateCcw, Star } from 'lucide-react';

interface GameCompleteProps {
  score: number;
  onPlayAgain: () => void;
  onMainMenu: () => void;
}

const GameComplete: React.FC<GameCompleteProps> = ({ score, onPlayAgain, onMainMenu }) => {
  const getScoreRating = (score: number) => {
    if (score >= 1000) return { rating: 'Master Builder!', stars: 3, color: 'text-yellow-400' };
    if (score >= 700) return { rating: 'Excellent Coder!', stars: 2, color: 'text-blue-400' };
    return { rating: 'Good Start!', stars: 1, color: 'text-green-400' };
  };

  const { rating, stars, color } = getScoreRating(score);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Celebration Animation */}
        <div className="relative mb-8">
          {/* Confetti effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <Star size={12} className="text-yellow-400" />
              </div>
            ))}
          </div>

          {/* Main Trophy */}
          <div className="relative z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <Trophy size={64} className="text-white" />
            </div>
          </div>
        </div>

        {/* Completion Message */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            🎉 Congratulations! 🎉
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-6">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">You Built Your Dream Home!</h2>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              From living on the streets to owning a beautiful furnished home - 
              you've proven that skills and determination can change everything!
            </p>

            {/* Score Display */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Trophy size={32} className="text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold text-white">{score} Points</p>
                  <p className={`text-lg font-semibold ${color}`}>{rating}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6">
              <p className="text-lg text-green-200 font-semibold mb-2">
                "You built this with your mind. From zero to a home — you earned it."
              </p>
              <p className="text-2xl font-bold text-white">
                YOU BUILT YOUR FUTURE WITH CODE
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-blue-400 mb-1">8</div>
            <div className="text-sm text-gray-300">Levels Completed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
            <div className="text-sm text-gray-300">House Built</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-purple-400 mb-1">{stars}</div>
            <div className="text-sm text-gray-300">Stars Earned</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPlayAgain}
            className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw size={24} className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Play Again</span>
            </div>
          </button>
          
          <button
            onClick={onMainMenu}
            className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-3">
              <Home size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Main Menu</span>
            </div>
          </button>
        </div>

        {/* Motivational Quote */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 italic max-w-md mx-auto">
            "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameComplete;