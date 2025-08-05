import { Level } from '../types/game';

export const levels: Level[] = [
  {
    id: 1,
    title: "The Street Start",
    description: "Living on the footpath under a broken lamp post",
    scene: "A dark street corner with a flickering lamp post. Our character sits on cardboard with torn clothes.",
    puzzleType: 'number-series',
    reward: "A mat and plastic cover appear",
    hopeBotMessage: "Every journey begins with a single step. Let's solve this together!",
    hint: "Look for the pattern in the numbers. What's the difference between each number?",
    backgroundImage: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    houseStage: 1
  },
  {
    id: 2,
    title: "First Step Shelter",
    description: "A tin shed with torn curtain for basic protection",
    scene: "A makeshift tin shelter with fabric walls, still on the street but with some privacy.",
    puzzleType: 'loops',
    reward: "A wooden floor appears",
    hopeBotMessage: "You're making progress! Loops help us repeat actions efficiently.",
    hint: "Count how many times the loop will execute. Remember the starting value and condition!",
    backgroundImage: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
    houseStage: 2
  },
  {
    id: 3,
    title: "Building Walls",
    description: "Under-construction zone with basic foundation",
    scene: "A construction area with tools scattered around and the first wall frame visible.",
    puzzleType: 'logic',
    reward: "First wall of house appears",
    hopeBotMessage: "Strong walls need strong logic. You're building more than just a house!",
    hint: "One of these doesn't belong with the others. Think about what makes them similar or different.",
    backgroundImage: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)",
    houseStage: 3
  },
  {
    id: 4,
    title: "Light of Hope",
    description: "One-room structure with electrical wiring",
    scene: "A single room with exposed wires and the promise of electricity.",
    puzzleType: 'if-else',
    reward: "Electricity bulb & second wall",
    hopeBotMessage: "Conditional logic lights up possibilities. Every decision matters!",
    hint: "Follow the if-else conditions step by step. What happens when each condition is checked?",
    backgroundImage: "linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)",
    houseStage: 4
  },
  {
    id: 5,
    title: "Roof Overhead",
    description: "Walls complete, adding protection from above",
    scene: "Four walls standing strong, ready for a roof to complete the shelter.",
    puzzleType: 'debug',
    reward: "Roof is added",
    hopeBotMessage: "Debugging teaches patience. Every error fixed makes you stronger!",
    hint: "Look carefully at the code. Check for syntax errors, missing brackets, or wrong variable names.",
    backgroundImage: "linear-gradient(135deg, #9ca3af 0%, #d1d5db 100%)",
    houseStage: 5
  },
  {
    id: 6,
    title: "Door to Possibility",
    description: "Adding windows and doors for light and access",
    scene: "A complete structure with openings being added for natural light and entry.",
    puzzleType: 'pattern',
    reward: "Windows and main door added",
    hopeBotMessage: "Patterns open doors to understanding. You're almost home!",
    hint: "Look at the sequence carefully. What's the pattern? Numbers, shapes, or positions?",
    backgroundImage: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    houseStage: 6
  },
  {
    id: 7,
    title: "Furniture of Focus",
    description: "Making the house a comfortable home",
    scene: "Interior of the house with furniture being arranged to create a cozy living space.",
    puzzleType: 'reasoning',
    reward: "Bed, chair, and lamp added",
    hopeBotMessage: "Logical reasoning furnishes the mind. Comfort comes from understanding!",
    hint: "Think step by step. Use the given information to reach the logical conclusion.",
    backgroundImage: "linear-gradient(135deg, #fde68a 0%, #fbbf24 100%)",
    houseStage: 7
  },
  {
    id: 8,
    title: "Final Challenge – The Dream",
    description: "Completing the dream home with final touches",
    scene: "A beautiful furnished house with a garden area waiting for the final magical transformation.",
    puzzleType: 'combined',
    reward: "Garden, paint, nameplate 'MY FIRST HOME'",
    hopeBotMessage: "This is it! Show everything you've learned. Your dream home awaits!",
    hint: "Combine all your knowledge - logic, coding, and reasoning. Take your time and think carefully!",
    backgroundImage: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    houseStage: 8
  }
];