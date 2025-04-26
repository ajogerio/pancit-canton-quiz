import React from "react";
import PropTypes from "prop-types";
import { choiceLetters } from "../data/choices";

export default function ChoiceCard({
  index,
  choice,
  selectedChoice,
  onChoiceClick,
}) {
  const currentLetter = choiceLetters[index];

  return (
    <div
      className={`flex flex-row items-center gap-[36px] cursor-pointer rounded-lg p-4 text-[#edcd44] font-extrabold ${
        selectedChoice === currentLetter ? "bg-[#81cad6]" : "bg-[#dc3e26]"
      }`}
      onClick={() => {
        onChoiceClick(currentLetter);
      }}
    >
      <div className="rounded-full bg-[#edcd44] text-[#dc3e26] font-bold flex items-center justify-center w-12 h-12">
        {currentLetter}
      </div>
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
