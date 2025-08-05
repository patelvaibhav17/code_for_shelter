import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, RotateCcw, Home, Lightbulb, Trophy } from 'lucide-react';
import GameLevel from './components/GameLevel';
import HopeBot from './components/HopeBot';
import MainMenu from './components/MainMenu';
import PuzzleModal from './components/PuzzleModal';
import GameComplete from './components/GameComplete';
import { GameState, Level } from './types/game';
import { levels } from './data/levels';
import { getRandomQuestions } from './data/questions';

function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [score, setScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hopeBotMessage, setHopeBotMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [gameQuestions, setGameQuestions] = useState<any[]>([]);

  // Initialize game questions on start
  useEffect(() => {
    if (gameState === 'playing') {
      setGameQuestions(getRandomQuestions());
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentLevel(0);
    setCompletedLevels([]);
    setScore(0);
    setHopeBotMessage("Welcome to your journey! Let's build your future together.");
  };

  const startPuzzle = () => {
    setShowPuzzle(true);
    setHopeBotMessage(levels[currentLevel].hopeBotMessage);
  };

  const completePuzzle = (correct: boolean, points: number = 0) => {
    setShowPuzzle(false);
    
    if (correct) {
      const newCompletedLevels = [...completedLevels, currentLevel];
      setCompletedLevels(newCompletedLevels);
      setScore(score + points);
      
      if (currentLevel === levels.length - 1) {
        // Game complete
        setGameState('complete');
        setHopeBotMessage("You did it! You built your dream home with your skills!");
      } else {
        // Move to next level
        setCurrentLevel(currentLevel + 1);
        setHopeBotMessage(`Amazing! Level ${currentLevel + 1} complete. Your home is taking shape!`);
      }
    } else {
      setHopeBotMessage("Don't give up! Every great coder started with mistakes. Try again!");
    }
  };

  const resetGame = () => {
    setGameState('menu');
    setCurrentLevel(0);
    setCompletedLevels([]);
    setScore(0);
    setHopeBotMessage('');
    setShowHint(false);
  };

  const requestHint = () => {
    setShowHint(true);
    setHopeBotMessage("Here's a hint: " + levels[currentLevel].hint);
    setTimeout(() => setShowHint(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Home className="text-amber-400" size={28} />
          <h1 className="text-2xl font-bold text-white">Code for Shelter</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {gameState === 'playing' && (
            <>
              <div className="flex items-center space-x-2 text-white">
                <Trophy className="text-amber-400" size={20} />
                <span className="font-semibold">{score}</span>
              </div>
              <div className="text-white text-sm">
                Level {currentLevel + 1}/{levels.length}
              </div>
            </>
          )}
          
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 text-white"
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          
          {gameState !== 'menu' && (
            <button
              onClick={resetGame}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 text-white"
            >
              <RotateCcw size={20} />
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {gameState === 'menu' && (
          <MainMenu onStartGame={startGame} />
        )}

        {gameState === 'playing' && (
          <div className="container mx-auto px-4 py-8">
            <GameLevel
              level={levels[currentLevel]}
              levelNumber={currentLevel}
              completedLevels={completedLevels}
              onStartPuzzle={startPuzzle}
            />
          </div>
        )}

        {gameState === 'complete' && (
          <GameComplete
            score={score}
            onPlayAgain={startGame}
            onMainMenu={resetGame}
          />
        )}
      </main>

      {/* Hope-Bot */}
      {gameState !== 'menu' && (
        <HopeBot
          message={hopeBotMessage}
          onRequestHint={gameState === 'playing' && !showPuzzle ? requestHint : undefined}
          showHint={showHint}
        />
      )}

      {/* Puzzle Modal */}
      {showPuzzle && gameQuestions.length > 0 && (
        <PuzzleModal
          level={levels[currentLevel]}
          questions={gameQuestions}
          levelNumber={currentLevel}
          onComplete={completePuzzle}
          onClose={() => setShowPuzzle(false)}
        />
      )}

      {/* Audio element for background music */}
      {soundEnabled && (
        <audio loop autoPlay className="hidden">
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcCzmB1+7KeVsFJDp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDBzp+zfLCaiIDB..." type="audio/wav" />
        </audio>
      )}
    </div>
  );
}

export default App;