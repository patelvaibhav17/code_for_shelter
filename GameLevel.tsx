import React from 'react';
import { Play, CheckCircle, Lock } from 'lucide-react';
import { Level } from '../types/game';
import HouseVisualization from './HouseVisualization';

interface GameLevelProps {
  level: Level;
  levelNumber: number;
  completedLevels: number[];
  onStartPuzzle: () => void;
}

const GameLevel: React.FC<GameLevelProps> = ({
  level,
  levelNumber,
  completedLevels,
  onStartPuzzle
}) => {
  const isCompleted = completedLevels.includes(levelNumber);
  const isLocked = levelNumber > 0 && !completedLevels.includes(levelNumber - 1);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Level Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
            isCompleted ? 'bg-green-500 text-white' : 
            isLocked ? 'bg-gray-500 text-gray-300' : 
            'bg-amber-500 text-white'
          }`}>
            {isCompleted ? <CheckCircle size={32} /> : 
             isLocked ? <Lock size={32} /> : 
             levelNumber + 1}
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-2">{level.title}</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{level.description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Scene Description */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Current Scene</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{level.scene}</p>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Puzzle Type</h4>
              <p className="text-purple-200 capitalize">{level.puzzleType.replace('-', ' ')}</p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Reward</h4>
              <p className="text-green-200">{level.reward}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            {isLocked ? (
              <div className="bg-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold">
                Complete Previous Level to Unlock
              </div>
            ) : isCompleted ? (
              <div className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2">
                <CheckCircle size={24} />
                <span>Level Completed!</span>
              </div>
            ) : (
              <button
                onClick={onStartPuzzle}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Play size={24} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>Start Puzzle</span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* House Visualization */}
        <div className="flex justify-center">
          <HouseVisualization 
            stage={level.houseStage} 
            isCompleted={isCompleted} 
          />
        </div>
      </div>
    </div>
  );
};

export default GameLevel;