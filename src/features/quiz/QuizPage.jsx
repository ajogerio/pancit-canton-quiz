import React, { useEffect, useState, useReducer } from "react";
import ProgressBar from "./components/ProgressBar";
import Question from "./components/Question";
import Choices from "./components/Choices";
import PreviousButton from "./components/PreviousButton";
import NextButton from "./components/NextButton";
import FinishButton from "./components/FinishButton";

const initialQuizFormState = {
  quizForm: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
  },
  selectedChoice: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_CHOICE":
      return {
        ...state,
        quizForm: {
          ...state.quizForm,
          [action.payload.questionNumber]: action.payload.selectedLetter,
        },

        selectedChoice: action.payload.selectedLetter,
      };

    case "LOAD_SELECTED_CHOICE":
      return {
        ...state,
        selectedChoice: action.payload,
      };

    default:
      return state;
  }
}

export default function QuizPage() {
  // total number of questions
  const questionsTotal = 10;

  // the current question number
  const [questionNumber, setQuestionNumber] = useState(1);

  // track the progress of the user
  const [progress, setProgress] = useState(0);

  // this will check if the navigation buttons can be selected or not
  const [enableNextButton, setEnableNextButton] = useState(false);
  const [enableBackButton, setEnableBackButton] = useState(false);
  const [enableFinishButton, setEnableFinishButton] = useState(false);

  // this will hold all the previous choice data so it persists
  const [state, dispatch] = useReducer(quizReducer, initialQuizFormState);
  const { quizForm, selectedChoice } = state;

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    // check if we can enable the back button
    if (questionNumber > 1) {
      setEnableBackButton(true);
    } else {
      setEnableBackButton(false);
    }

    // check if we can enable the next button
    if (questionNumber === questionsTotal) {
      setEnableNextButton(false);
    }

    // scroll back up
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  }, [questionNumber, questionsTotal]);

  return (
    <main className="flex items-center justify-center min-h-screen py-10 bg-[#1a8954] px-5">
      <div className="flex flex-col items-center bg-[#ffffff] sm:py-10 py-5 px-10 sm:px-20 rounded-2xl max-w-7xl w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-5">
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
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl w-full px-10 py-5 md:py-15 md:px-25 gap-5">
            <Question
              questionNumber={questionNumber}
              questionsTotal={questionsTotal}
            />
            <Choices
              questionsTotal={questionsTotal}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setEnableNextButton={setEnableNextButton}
              setEnableFinishButton={setEnableFinishButton}
              setProgress={setProgress}
              quizForm={quizForm}
              selectedChoice={selectedChoice}
              dispatch={dispatch}
            />
          </div>
          <div className="flex w-full gap-5 sm:flex-row flex-col">
            <div className="w-full h-full"></div>
            <div className="flex items-center justify-center max-w-xl w-full gap-2">
              <PreviousButton
                enableBackButton={enableBackButton}
                setQuestionNumber={setQuestionNumber}
              />
              <NextButton
                enableNextButton={enableNextButton}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
            <div className="w-full flex justify-center sm:justify-end">
              <FinishButton
                enableFinishButton={enableFinishButton}
                quizForm={quizForm}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
