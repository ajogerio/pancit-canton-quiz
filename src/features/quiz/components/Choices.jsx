import React, { useEffect, useState, useReducer } from "react";
import { choicesPerQuestion } from "../data/choices";
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
  // this will hold all the previous choice data so it persists
  const [state, dispatch] = useReducer(quizReducer, initialQuizFormState);
  const { quizForm, selectedChoice } = state;

  // show the info of the selected choice
  const [showChoiceInfo, setShowChoiceInfo] = useState(false);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

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
    <div>
      <div>
        {!showChoiceInfo && // show this only when showChoiceInfo is false
          choicesToDisplay.map((choice, index) => {
            return (
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
            );
          })}

        {showChoiceInfo && (
          <div>
            <p>
              You chose <span className="font-semibold">{selectedChoice}</span>
            </p>
            <p>{choiceInfo[questionNumber][selectedChoice]}</p>
          </div>
        )}
      </div>

      <div className="flex flex-row">
        {questionNumber > 1 && (
          <button
            className="rounded-full bg-gray-400 text-white p-1 cursor-pointer"
            onClick={() => {
              setQuestionNumber((prev) => prev - 1);
              setShowChoiceInfo(false);
            }}
          >
            Previous Question
          </button>
        )}

        {selectedChoice && // if a user has selected a choice
          !showChoiceInfo && ( // and the choice information is not yet showing already showing
            <button
              className="rounded-full bg-gray-400 text-white p-1 cursor-pointer"
              onClick={() => {
                setShowChoiceInfo(true);
              }}
            >
              Proceed
            </button>
          )}

        {showChoiceInfo &&
          questionNumber < questionsTotal && ( // and the question number is less than the total questions
            <button
              className="rounded-full bg-gray-400 text-white p-1 cursor-pointer"
              onClick={() => {
                setQuestionNumber((prev) => prev + 1);
                setShowChoiceInfo(false);
              }}
            >
              Next Question
            </button>
          )}
      </div>
    </div>
  );
}

Choices.propTypes = {
  questionsTotal: PropTypes.number,
  questionNumber: PropTypes.number,
  setQuestionNumber: PropTypes.func,
  progress: PropTypes.number,
};
