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
      className={`group relative flex flex-row items-center gap-[36px] 
        cursor-pointer rounded-lg px-5 py-2.5 font-extrabold
        ${
          selectedChoice !== currentLetter
            ? "hover:bg-white hover:shadow-lg hover:border-transparent hover:text-black  text-gray-400 border-gray-400"
            : ""
        }  
        ${
          selectedChoice === currentLetter
            ? "bg-[#1a8954] shadow-lg text-black"
            : "bg-gray-100 border-1"
        }`}
      onClick={() => {
        onChoiceClick(currentLetter);
      }}
    >
      <div className="hidden group-hover:block absolute left-0 w-1.5 h-[90%] bg-[#1a8954] rounded-full"></div>

      <div className="rounded-full bg-gray-100 text-grey-200 font-bold flex items-center justify-center w-12 h-12">
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
