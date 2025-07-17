import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useQuizStore } from "../../store/quizStore";

const Quiz = () => {
  const {
    questions,
    current,
    answers,
    setAnswer,
    skipQuestion,
    nextQuestion,
    resetQuiz,
  } = useQuizStore();

  const [showResult, setShowResult] = useState(false);

  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    setAnswered(true);
  };

  const handleNext = () => {
    if (selected !== null) {
      if (questions[current].answer === selected) {
        setAnswer("right");
      } else {
        setAnswer("wrong");
      }
    }
    setSelected(null);
    setAnswered(false);
    nextQuestion();
  };

  const handleSkip = () => {
    setSelected(null);
    setAnswered(false);
    skipQuestion();
  };

  useEffect(() => {
    if (current >= questions.length) {
      setShowResult(true);
    }
  }, [current, questions.length]);

  if (showResult) {
    const right = answers.filter((a) => a === "right").length;
    const wrong = answers.filter((a) => a === "wrong").length;
    const skipped = answers.filter((a) => a === "skipped").length;
    return (
      <View className="flex-1 justify-center items-center p-6 bg-slate-50">
        <Text className="text-2xl font-bold mb-4 text-blue-700">
          Quiz Result
        </Text>
        <View className="bg-white p-6 rounded-2xl shadow mb-6 w-72">
          <Text className="text-lg mb-2 text-green-600">
            Right Answers: {right}
          </Text>
          <Text className="text-lg mb-2 text-red-600">
            Wrong Answers: {wrong}
          </Text>
          <Text className="text-lg mb-2 text-orange-400">
            Skipped Questions: {skipped}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-blue-700 py-3 rounded-lg w-3/5"
          onPress={() => {
            resetQuiz();
            setShowResult(false);
          }}>
          <Text className="text-white font-bold text-center text-lg">
            Restart Quiz
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (current >= questions.length) {
    return null;
  }

  const q = questions[current];

  if (current >= questions.length) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center p-4 bg-slate-50">
      <Text className="text-xl mb-4 text-blue-700 font-bold">
        Question {current + 1} of {questions.length}
      </Text>
      <Text className="text-lg mb-6">{q.question}</Text>
      {q.options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          className={`mb-2 w-4/5 rounded-lg p-3 ${
            selected === idx
              ? "bg-blue-700 border-2 border-blue-700"
              : "bg-gray-200"
          } ${selected === idx ? "" : ""}`}
          onPress={() => handleAnswer(idx)}
          disabled={answered && selected !== idx}>
          <Text
            className={
              selected === idx ? "text-white font-bold" : "text-gray-900"
            }>
            {opt}
          </Text>
        </TouchableOpacity>
      ))}
      <View className="flex-row mt-6">
        <TouchableOpacity
          className="bg-orange-400 py-3 rounded-lg w-24 mr-4"
          onPress={handleSkip}>
          <Text className="text-white text-center font-bold">Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-3 rounded-lg w-24 ${
            answered ? "bg-blue-700" : "bg-slate-400"
          }`}
          onPress={handleNext}
          disabled={!answered}>
          <Text className="text-white text-center font-bold">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Quiz;
