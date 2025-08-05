import React from 'react';
import { Play, Code, Heart, Trophy } from 'lucide-react';

interface MainMenuProps {
  onStartGame: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center transform rotate-3 shadow-2xl">
                <Code size={64} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Heart size={16} className="text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Code for <span className="text-amber-400">Shelter</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform from poverty to prosperity through the power of coding. 
            Build your dream home by solving puzzles and mastering programming concepts.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Code size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Learn Programming</h3>
            <p className="text-gray-300">Master coding concepts through engaging puzzles and challenges</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Heart size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Inspiring Story</h3>
            <p className="text-gray-300">Follow an emotional journey from homelessness to success</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Trophy size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Build Your Home</h3>
            <p className="text-gray-300">Watch your dream house come to life with each solved puzzle</p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartGame}
          className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center space-x-3">
            <Play size={24} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Start Your Journey</span>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>

        {/* Subtitle */}
        <p className="mt-6 text-sm text-gray-400 max-w-md mx-auto">
          "Every line of code is a step towards your dreams. Your skills will build your future."
        </p>
      </div>
    </div>
  );
};

export default MainMenu;