import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Choices from "./components/Choices";
import PreviousButton from "./components/PreviousButton";
import NextButton from "./components/NextButton";
import FinishButton from "./components/FinishButton";

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
    setProgress(Math.round((questionNumber / questionsTotal) * 100) - 10);
  }, [questionNumber, questionsTotal]);

  return (
    <main className="flex items-center justify-center min-h-screen py-10 bg-[#1a8954] px-5">
      <div className="flex flex-col items-center bg-[#ffffff] py-10 px-20 rounded-2xl max-w-7xl w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="flex items-center gap-5">
            <p>Pancit Canton Quiz</p>
            <div className="flex flex-col">
              <p>{progress}%</p>
              <ProgressBar
                questionsTotal={questionsTotal}
                questionNumber={questionNumber}
                progress={progress}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl w-full">
            <Question
              questionNumber={questionNumber}
              questionsTotal={questionsTotal}
            />
            <Choices
              questionsTotal={questionsTotal}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
          <div className="flex w-full gap-5 sm:flex-row flex-col">
            <div className="w-full h-full"></div>
            <div className="flex items-center justify-center max-w-xl w-full gap-2">
              <PreviousButton />
              <NextButton />
            </div>
            <div className="w-full flex justify-center sm:justify-end">
              <FinishButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
