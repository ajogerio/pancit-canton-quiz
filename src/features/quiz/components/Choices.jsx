import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { choicesPerQuestion, choiceLetters } from "../data/choices";
import { choiceInfo } from "../data/choiceInfo";
import PropTypes from "prop-types";
import ChoiceCard from "./ChoiceCard";

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

export default function Choices({
  questionsTotal,
  questionNumber,
  setQuestionNumber,
}) {
  // for navigation
  const navigate = useNavigate();

  // this will hold all the previous choice data so it persists
  const [state, dispatch] = useReducer(quizReducer, initialQuizFormState);
  const { quizForm, selectedChoice } = state;

  // show the info of the selected choice
  const [showChoiceInfo, setShowChoiceInfo] = useState(false);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

  // this will check if the navigation buttons can be selected or not
  const [enableNextButton, setEnableNextButton] = useState(false);
  const [enableBackButton, setEnableBackButton] = useState(false);
  const [enableFinishButton, setEnableFinishButton] = useState(false);

  // select the choices to be rendered depending on the question number
  // AND highlight a choice if it was previously selected
  useEffect(() => {
    // fetch the choices to display
    setChoicesToDisplay(choicesPerQuestion[questionNumber]);
    console.log(`New Set of Choices: ${choicesPerQuestion[questionNumber]}`);

    // fetch the saved selection state
    dispatch({
      type: "LOAD_SELECTED_CHOICE",
      payload: quizForm[questionNumber],
    });
    console.log(`New Question Number: ${questionNumber}\n`);
  }, [questionNumber, quizForm]);

  useEffect(() => {
    console.log(quizForm);
  }, [quizForm]);

  return (
    <div className="flex flex-col items-center gap-4 px-10 w-full">
      <div className="flex flex-col gap-4 min-h-40">
        {!showChoiceInfo &&
          choicesToDisplay.map((choice, index) => (
            <ChoiceCard
              key={index}
              index={index}
              choice={choice}
              selectedChoice={selectedChoice}
              onChoiceClick={(selectedLetter) => {
                dispatch({
                  type: "SELECT_CHOICE",
                  payload: { questionNumber, selectedLetter },
                });
              }}
            />
          ))}

        {/* {showChoiceInfo && (
          <div className="">
            <p>
              You chose{" "}
              <span className="font-semibold">
                {
                  choicesPerQuestion[questionNumber][
                    choiceLetters.indexOf(selectedChoice)
                  ]
                }
              </span>
            </p>
            <p>{choiceInfo[questionNumber][selectedChoice]}</p>
          </div>
        )} */}
      </div>

      <div className="flex flex-row gap-2">
        {/* {questionNumber > 1 && (
          <button
            className="rounded-full bg-[#dc3e26] text-white p-1 cursor-pointer w-12 h-12"
            onClick={() => {
              setQuestionNumber((prev) => prev - 1);
              setShowChoiceInfo(false);
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )} */}

        {/* {selectedChoice && !showChoiceInfo && (
          <button
            className="rounded-full bg-[#dc3e26] text-white p-1 cursor-pointer w-12 h-12"
            onClick={() => {
              setShowChoiceInfo(true);
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        )} */}

        {/* {showChoiceInfo && (
          <>
            <button
              className="rounded-full bg-[#dc3e26] text-white p-1 cursor-pointer"
              onClick={() => {
                setShowChoiceInfo(false);
              }}
            >
              Edit Answer
            </button>

            {questionNumber < questionsTotal ? (
              <button
                className="rounded-full bg-[#dc3e26] text-white p-1 cursor-pointer w-12 h-12"
                onClick={() => {
                  setQuestionNumber((prev) => prev + 1);
                  setShowChoiceInfo(false);
                }}
              >
                {/* <i className="fa-solid fa-arrow-right"></i> */}
        {/* </button>
            ) : (
              <button
                className="rounded-full bg-green-500 text-white p-1 cursor-pointer"
                onClick={() => {
                  navigate("/calculating");
                }}
              >
                Finish Quiz
              </button>
            )}
          </> */}
        {/* )} */}
      </div>
    </div>
  );
}

Choices.propTypes = {
  questionsTotal: PropTypes.number,
  questionNumber: PropTypes.number,
  setQuestionNumber: PropTypes.func,
};
