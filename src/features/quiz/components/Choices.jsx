import React, { useEffect, useState } from "react";
import { choicesPerQuestion } from "../data/choices";
import ChoiceCard from "./ChoiceCard";

export default function Choices() {
  // total number of questions
  const questionsTotal = 10;

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

  // the current question number
  const [questionNumber, setQuestionNumber] = useState(1);

  // checks if the user has selected a choice
  const [selectedChoice, setSelectedChoice] = useState(null);

  // current choices to be displayed
  const [choicesToDisplay, setChoicesToDisplay] = useState([]);

  // select the choices to be rendered depending on the question number
  useEffect(() => {
    setChoicesToDisplay(choicesPerQuestion[questionNumber]);
  }, [questionNumber]);

  console.log("Quiz Form:", quizForm);

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
                setQuizForm(
                  (prev) => ({
                    ...prev,
                    [questionNumber]: selectedLetter,
                  }),
                  setSelectedChoice(selectedLetter)
                );
              }}
            />
          );
        })}
      </div>

      <div>
        {selectedChoice && // if a user has selected a choice
          questionNumber < questionsTotal - 1 && ( // and the question number is less than the total questions
            <button
              className="rounded-full bg-gray-400 text-white p-1"
              onClick={() => {
                setQuestionNumber((prev) => {
                  const updatedQuestionNumber = prev + 1;
                  console.log(`New Question Number: ${prev}\n`);
                  return updatedQuestionNumber;
                });
              }}
            >
              Next Question
            </button>
          )}
      </div>
    </div>
  );
}
