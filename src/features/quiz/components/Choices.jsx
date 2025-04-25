import React, { useEffect, useState } from "react";
import { choicesPerQuestion } from "../data/choices";
import { ChoiceCard } from "./ChoiceCard";

export default function Choices() {
  // total number of questions
  const questionsTotal = 10;

  // the current question number
  const [questionNumber, setQuestionNumber] = useState(1);

  // checks if the user has selected a choice
  const [hasSelected, setHasSelected] = useState(false);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

  // select the choices to be rendered depending on the question number
  useEffect(() => {
    setChoicesToDisplay(choicesPerQuestion[questionNumber]);
  }, [questionNumber]);

  return (
    <div>
      <div>
        {choicesToDisplay.map((choice, index) => {
          return <ChoiceCard key={index} choice={choice} />;
        })}
      </div>

      <div>
        {hasSelected && // if a user has selected a choice
          questionNumber < questionsTotal - 2 && ( // and the question number is less than the total questions
            <button className="rounded-full bg-gray-400 text-white p-1">
              Next Question
            </button>
          )}
      </div>
    </div>
  );
}
