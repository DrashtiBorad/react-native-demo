import { create } from "zustand";

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

export type QuizState = {
  questions: QuizQuestion[];
  current: number;
  answers: ("right" | "wrong" | "skipped")[];
  setAnswer: (result: "right" | "wrong" | "skipped") => void;
  skipQuestion: () => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
};

export const useQuizStore = create<QuizState>((set: any, get: any) => ({
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2,
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1,
    },
    {
      id: 3,
      question: "Who wrote Hamlet?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "What is the largest ocean?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3,
    },
    {
      id: 5,
      question: "What is the boiling point of water?",
      options: ["90°C", "100°C", "110°C", "120°C"],
      answer: 1,
    },
    {
      id: 6,
      question: "Which country is known for the maple leaf?",
      options: ["USA", "Canada", "UK", "Australia"],
      answer: 1,
    },
    {
      id: 7,
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: 2,
    },
    {
      id: 8,
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: 0,
    },
    {
      id: 10,
      question: "Which language is used to style web pages?",
      options: ["HTML", "Python", "CSS", "Java"],
      answer: 2,
    },
  ],
  current: 0,
  answers: [],
  setAnswer: (result: "right" | "wrong" | "skipped") => {
    set((state: QuizState) => {
      const updatedAnswers = [...state.answers];
      updatedAnswers[state.current] = result;
      return { answers: updatedAnswers };
    });
  },
  skipQuestion: () => {
    set((state: QuizState) => {
      const updatedAnswers = [...state.answers];
      updatedAnswers[state.current] = "skipped";
      return { answers: updatedAnswers };
    });
    get().nextQuestion();
  },
  nextQuestion: () => {
    set((state: QuizState) => ({ current: state.current + 1 }));
  },
  resetQuiz: () => {
    set({ current: 0, answers: [] });
  },
}));
