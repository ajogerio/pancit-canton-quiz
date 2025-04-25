import React from "react";
import PropTypes from "prop-types";

export default function ChoiceCard({
  index,
  choice,
  selectedChoice,
  onChoiceClick,
}) {
  const choiceLetters = ["A", "B", "C", "D", "E"];
  const currentLetter = choiceLetters[index];

  return (
    <div
      className={`flex flex-row cursor-pointer rounded-full text-white my-5 gap-1 ${
        selectedChoice === currentLetter ? "bg-green-400" : "bg-gray-600"
      }`}
      onClick={() => {
        onChoiceClick(currentLetter);
      }}
    >
      <div>{currentLetter}</div>
      <div>{choice}</div>
    </div>
  );
}

ChoiceCard.propTypes = {
  index: PropTypes.number,
  choice: PropTypes.string,
  selectedChoice: PropTypes.string,
  onChoiceClick: PropTypes.func,
};
