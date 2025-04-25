import React, { useEffect, useState } from "react";
import { choicesPerQuestion } from "../data/choices";
import PropTypes from "prop-types";
import ChoiceCard from "./ChoiceCard";

export default function Choices({
  questionsTotal,
  questionNumber,
  setQuestionNumber,
  setProgress,
}) {
  // this will hold all the data so it persists
  const [quizForm, setQuizForm] = useState({
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
  });

  // stores the selected choice of the user
  const [selectedChoice, setSelectedChoice] = useState(null);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

  // select the choices to be rendered depending on the question number
  useEffect(() => {
    setChoicesToDisplay(choicesPerQuestion[questionNumber]);
    console.log(choicesPerQuestion[questionNumber]);
  }, [questionNumber]);

  useEffect(() => {
    console.log(quizForm);
  }, [quizForm]);

  return (
    <div>
      <div>
        {choicesToDisplay.map((choice, index) => {
          return (
            <ChoiceCard
              key={index}
              index={index}
              choice={choice}
              selectedChoice={selectedChoice}
              onChoiceClick={(selectedLetter) => {
                // update the quiz form
                setQuizForm((prev) => ({
                  ...prev,
                  [questionNumber]: selectedLetter,
                }));

                // update the selected choice
                setSelectedChoice(selectedLetter);
              }}
            />
          );
        })}
      </div>

      <div>
        {selectedChoice && // if a user has selected a choice
          questionNumber < questionsTotal && ( // and the question number is less than the total questions
            <button
              className="rounded-full bg-gray-400 text-white p-1 cursor-pointer"
              onClick={() => {
                setQuestionNumber((prev) => {
                  const updatedQuestionNumber = prev + 1;
                  console.log(`New Question Number: ${prev}\n`);
                  return updatedQuestionNumber;
                });

                // reset the selection state
                setSelectedChoice(null);

                // update the progress
                setProgress(Math.round((questionNumber / questionsTotal) * 100));
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
  setProgress: PropTypes.func,
};
