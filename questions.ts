import { Question } from '../types/game';

const questionBank = {
  'number-series': [
    {
      id: 'ns1',
      type: 'number-series',
      question: 'What comes next in the series: 2, 4, 6, 8, ?',
      options: ['9', '10', '11', '12'],
      correctAnswer: '10',
      explanation: 'This is a series of even numbers, each increasing by 2.',
      points: 100
    },
    {
      id: 'ns2',
      type: 'number-series',
      question: 'Complete the series: 1, 1, 2, 3, 5, 8, ?',
      options: ['11', '13', '15', '17'],
      correctAnswer: '13',
      explanation: 'This is the Fibonacci series where each number is the sum of the two preceding ones.',
      points: 120
    },
    {
      id: 'ns3',
      type: 'number-series',
      question: 'What comes next: 5, 10, 20, 40, ?',
      options: ['60', '70', '80', '90'],
      correctAnswer: '80',
      explanation: 'Each number is multiplied by 2 to get the next number.',
      points: 110
    }
  ],
  'loops': [
    {
      id: 'l1',
      type: 'loops',
      question: 'What will be the output of this loop?\nfor(int i = 0; i < 3; i++) {\n  print(i);\n}',
      options: ['0 1 2', '1 2 3', '0 1 2 3', '1 2'],
      correctAnswer: '0 1 2',
      explanation: 'The loop starts at 0 and runs while i < 3, printing 0, 1, and 2.',
      points: 130
    },
    {
      id: 'l2',
      type: 'loops',
      question: 'How many times will "Hello" be printed?\nfor(int i = 1; i <= 4; i++) {\n  print("Hello");\n}',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
      explanation: 'The loop runs from 1 to 4 (inclusive), so it executes 4 times.',
      points: 120
    },
    {
      id: 'l3',
      type: 'loops',
      question: 'What is the final value of sum?\nint sum = 0;\nfor(int i = 1; i <= 3; i++) {\n  sum += i;\n}',
      options: ['3', '6', '9', '10'],
      correctAnswer: '6',
      explanation: 'sum = 0 + 1 + 2 + 3 = 6',
      points: 140
    }
  ],
  'logic': [
    {
      id: 'lg1',
      type: 'logic',
      question: 'Which one is different? Apple, Orange, Mango, Carrot',
      options: ['Apple', 'Orange', 'Mango', 'Carrot'],
      correctAnswer: 'Carrot',
      explanation: 'Carrot is a vegetable, while the others are fruits.',
      points: 110
    },
    {
      id: 'lg2',
      type: 'logic',
      question: 'Which number is odd one out? 2, 4, 7, 6, 8',
      options: ['2', '4', '7', '6'],
      correctAnswer: '7',
      explanation: '7 is the only odd number in the list.',
      points: 100
    },
    {
      id: 'lg3',
      type: 'logic',
      question: 'Complete the analogy: Book is to Reading as Fork is to ?',
      options: ['Kitchen', 'Eating', 'Metal', 'Spoon'],
      correctAnswer: 'Eating',
      explanation: 'A book is used for reading, just as a fork is used for eating.',
      points: 120
    }
  ],
  'if-else': [
    {
      id: 'ie1',
      type: 'if-else',
      question: 'What will be printed?\nint x = 5;\nif(x > 3) {\n  print("Big");\n} else {\n  print("Small");\n}',
      options: ['Big', 'Small', 'Nothing', 'Error'],
      correctAnswer: 'Big',
      explanation: 'Since x (5) is greater than 3, the condition is true and "Big" is printed.',
      points: 130
    },
    {
      id: 'ie2',
      type: 'if-else',
      question: 'What happens when age = 15?\nif(age >= 18) {\n  print("Adult");\n} else {\n  print("Minor");\n}',
      options: ['Adult', 'Minor', 'Both', 'Nothing'],
      correctAnswer: 'Minor',
      explanation: 'Since 15 is less than 18, the else condition executes and "Minor" is printed.',
      points: 120
    },
    {
      id: 'ie3',
      type: 'if-else',
      question: 'What is the output when score = 85?\nif(score >= 90) {\n  print("A");\n} else if(score >= 80) {\n  print("B");\n} else {\n  print("C");\n}',
      options: ['A', 'B', 'C', 'Nothing'],
      correctAnswer: 'B',
      explanation: 'Score 85 is not >= 90, but it is >= 80, so "B" is printed.',
      points: 140
    }
  ],
  'debug': [
    {
      id: 'd1',
      type: 'debug',
      question: 'Find the error in this code:\nint x = 5\nprint(x);',
      options: ['Missing semicolon after x = 5', 'Wrong variable name', 'Print is wrong', 'No error'],
      correctAnswer: 'Missing semicolon after x = 5',
      explanation: 'In most programming languages, statements need to end with a semicolon.',
      points: 140
    },
    {
      id: 'd2',
      type: 'debug',
      question: 'What\'s wrong with this loop?\nfor(int i = 0; i < 5; i--) {\n  print(i);\n}',
      options: ['Wrong initialization', 'Wrong condition', 'Wrong increment', 'Nothing wrong'],
      correctAnswer: 'Wrong increment',
      explanation: 'The loop decrements i instead of incrementing, causing an infinite loop.',
      points: 150
    },
    {
      id: 'd3',
      type: 'debug',
      question: 'Find the issue:\nif(x = 5) {\n  print("Equal");\n}',
      options: ['Should use == instead of =', 'Wrong brackets', 'Wrong print syntax', 'No issue'],
      correctAnswer: 'Should use == instead of =',
      explanation: 'Assignment operator (=) is used instead of comparison operator (==).',
      points: 130
    }
  ],
  'pattern': [
    {
      id: 'p1',
      type: 'pattern',
      question: 'What comes next? ○ ● ○ ● ?',
      options: ['○', '●', '◐', '◑'],
      correctAnswer: '○',
      explanation: 'The pattern alternates between empty circle (○) and filled circle (●).',
      points: 110
    },
    {
      id: 'p2',
      type: 'pattern',
      question: 'Complete the pattern: A1 B2 C3 D4 ?',
      options: ['E5', 'F5', 'E4', 'D5'],
      correctAnswer: 'E5',
      explanation: 'Each letter advances by one, and each number increases by one.',
      points: 120
    },
    {
      id: 'p3',
      type: 'pattern',
      question: 'What\'s next in the sequence? 1, 4, 9, 16, ?',
      options: ['20', '25', '30', '32'],
      correctAnswer: '25',
      explanation: 'These are perfect squares: 1², 2², 3², 4², 5² = 25.',
      points: 130
    }
  ],
  'reasoning': [
    {
      id: 'r1',
      type: 'reasoning',
      question: 'If all roses are flowers and some flowers are red, can we conclude that some roses are red?',
      options: ['Yes', 'No', 'Maybe', 'Not enough information'],
      correctAnswer: 'Not enough information',
      explanation: 'We cannot conclude this because we don\'t know if the red flowers include roses.',
      points: 150
    },
    {
      id: 'r2',
      type: 'reasoning',
      question: 'Tom is taller than Jerry. Jerry is taller than Spike. Who is the shortest?',
      options: ['Tom', 'Jerry', 'Spike', 'Cannot determine'],
      correctAnswer: 'Spike',
      explanation: 'From the given information: Tom > Jerry > Spike, so Spike is shortest.',
      points: 130
    },
    {
      id: 'r3',
      type: 'reasoning',
      question: 'In a class of 30 students, 18 play football and 20 play cricket. How many play both games?',
      options: ['8', '10', '12', '15'],
      correctAnswer: '8',
      explanation: 'Total playing either game = 18 + 20 - both = 30, so both = 8.',
      points: 160
    }
  ],
  'combined': [
    {
      id: 'c1',
      type: 'combined',
      question: 'A program prints numbers 1 to 10. If we want to print only even numbers, which condition should we use inside the loop?',
      options: ['if(i % 2 == 0)', 'if(i % 2 == 1)', 'if(i / 2 == 0)', 'if(i * 2 == 0)'],
      correctAnswer: 'if(i % 2 == 0)',
      explanation: 'The modulo operator % gives remainder. Even numbers have remainder 0 when divided by 2.',
      points: 200
    },
    {
      id: 'c2',
      type: 'combined',
      question: 'What will be the final value of result?\nint result = 1;\nfor(int i = 1; i <= 3; i++) {\n  if(i % 2 == 1) {\n    result *= i;\n  }\n}',
      options: ['1', '3', '6', '9'],
      correctAnswer: '3',
      explanation: 'i=1: odd, result = 1*1 = 1; i=2: even, skip; i=3: odd, result = 1*3 = 3',
      points: 180
    },
    {
      id: 'c3',
      type: 'combined',
      question: 'In a sorting algorithm, if we compare adjacent elements and swap them if they are in wrong order, what is this called?',
      options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'],
      correctAnswer: 'Bubble Sort',
      explanation: 'Bubble Sort works by repeatedly comparing adjacent elements and swapping them if needed.',
      points: 220
    }
  ]
};

export function getRandomQuestions(): Question[] {
  const questions: Question[] = [];
  
  Object.keys(questionBank).forEach(type => {
    const typeQuestions = questionBank[type as keyof typeof questionBank];
    const randomQuestion = typeQuestions[Math.floor(Math.random() * typeQuestions.length)];
    questions.push(randomQuestion);
  });
  
  return questions;
}