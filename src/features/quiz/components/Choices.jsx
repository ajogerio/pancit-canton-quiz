import React, { useEffect, useState, useReducer } from "react";
import { choicesPerQuestion } from "../data/choices";
// import { choiceInfo } from "../data/choiceInfo";
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
  setEnableNextButton,
  setEnableFinishButton,
  setProgress,
}) {
  // this will hold all the previous choice data so it persists
  const [state, dispatch] = useReducer(quizReducer, initialQuizFormState);
  const { quizForm, selectedChoice } = state;

  // show the info of the selected choice
  // const [showChoiceInfo, setShowChoiceInfo] = useState(false);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

  // select the choices to be rendered depending on the question number
  // AND highlight a choice if it was previously selected
  useEffect(() => {
    const selected = quizForm[questionNumber];

    // fetch the choices to display
    setChoicesToDisplay(choicesPerQuestion[questionNumber]);
    console.log(`New Set of Choices: ${choicesPerQuestion[questionNumber]}`);

    // fetch the saved selection state
    dispatch({
      type: "LOAD_SELECTED_CHOICE",
      payload: quizForm[questionNumber],
    });
    console.log(`New Question Number: ${questionNumber}\n`);

    // set the appropriate states of the navigation and finish buttons
    if (selected) {
      if (questionNumber === questionsTotal) {
        setEnableFinishButton(true);
      } else {
        setEnableNextButton(true);
      }
    } else {
      setEnableFinishButton(false);
      setEnableNextButton(false);
    }
  }, [
    questionNumber,
    quizForm,
    setEnableNextButton,
    setEnableFinishButton,
    questionsTotal,
  ]);

  useEffect(() => {
    console.log(quizForm);
  }, [quizForm]);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col gap-4 min-h-40 w-full">
        {choicesToDisplay.map((choice, index) => (
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

              const selected = quizForm[questionNumber];
              if (!selected) {
                setProgress(Math.round((questionNumber / questionsTotal) * 100));
              } 
              
            }}
          />
        ))}
      </div>
    </div>
  );
}

Choices.propTypes = {
  questionsTotal: PropTypes.number,
  questionNumber: PropTypes.number,
  setQuestionNumber: PropTypes.func,
  setEnableNextButton: PropTypes.func,
  setEnableFinishButton: PropTypes.func,
  setProgress: PropTypes.func,
};
