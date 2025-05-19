import React, { useEffect, useState } from "react";
import { choicesPerQuestion } from "../data/choices";
import PropTypes from "prop-types";
import ChoiceCard from "./ChoiceCard";

export default function Choices({
  questionsTotal,
  questionNumber,
  setEnableNextButton,
  setEnableFinishButton,
  setProgress,
  quizForm,
  selectedChoice,
  dispatch,
}) {
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

    // set show choice info back to false ?
  }, [
    questionNumber,
    quizForm,
    setEnableNextButton,
    setEnableFinishButton,
    questionsTotal,
    dispatch,
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
            // showChoiceInfo={showChoiceInfo}
            questionNumber={questionNumber}
            selectedChoice={selectedChoice}
            onChoiceClick={(selectedLetter) => {
              // update the quiz form
              dispatch({
                type: "SELECT_CHOICE",
                payload: { questionNumber, selectedLetter },
              });

              // update the progress bar
              const selected = quizForm[questionNumber];
              if (!selected) {
                setProgress(
                  Math.round((questionNumber / questionsTotal) * 100)
                );
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
  quizForm: PropTypes.objectOf(PropTypes.oneOf(choicesPerQuestion)).isRequired,
  selectedChoice: PropTypes.oneOf(choicesPerQuestion),
  dispatch: PropTypes.func.isRequired,
};
