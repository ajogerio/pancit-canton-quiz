import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Choices from "./components/Choices";

export default function QuizPage() {
  // total number of questions
  const questionsTotal = 10;

  // the current question number
  const [questionNumber, setQuestionNumber] = useState(1);

  // track the progress of the user
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    // update the progress
    setProgress(Math.round((questionNumber / questionsTotal) * 100));
  }, [questionNumber, questionsTotal]);

  return (
    <main className="flex flex-col items-center min-h-screen mx-auto py-[18px]">
      <ProgressBar
        questionsTotal={questionsTotal}
        questionNumber={questionNumber}
        progress={progress}
      />
      <Question
        questionNumber={questionNumber}
        questionsTotal={questionsTotal}
      />
      <Choices
        questionsTotal={questionsTotal}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </main>
  );
}
