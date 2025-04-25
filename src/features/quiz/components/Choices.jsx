import React, { useEffect, useState } from "react";

export default function Choices() {
  // total number of questions
  const questionsTotal = 10;

  // the current question number
  const [questionNumber, setQuestionNumber] = useState(0);

  // checks if the user has selected a choice
  const [hasSelected, setHasSelected] = useState(false);

  // current choices to be displayed
  const [choices, setChoices] = useState([]);

  // select the choices to be rendered depending on the question number
  useEffect(() => {
    const choicesPerQuestion = [
      ["Choice A", "Choice B", "Choice C", "Choice D", "Choice E"], // question 1
      ["Choice a", "Choice b", "Choice c", "Choice d", "Choice e"], // question 2
      ["Choice A", "Choice BA", "Choice KA", "Choice DA", "Choice E"], // question 3
      // Add more question choices as needed
    ];

    setChoices(choicesPerQuestion[questionNumber]);
  }, [questionNumber]);

  return (
    <div>
      <div>
        {choices.map((choice, index) => {
          return <ChoiceCard key={index} choice={choice} />;
        })}
      </div>

      <div>
        {hasSelected && // if a user has selected a choice
          questionNumber < questionsTotal - 1 && ( // and the question number is less than the total questions
            <button className="rounded-full bg-gray-400 text-white p-1">
              Next Question
            </button>
          )}
      </div>
    </div>
  );
}
