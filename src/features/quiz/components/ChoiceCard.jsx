import React from "react";
import PropTypes from "prop-types";
import { choiceLetters } from "../data/choices";
import { choiceInfo } from "../data/choiceInfo";
import { choiceImages } from "../data/choiceImages";
import { choicesPerQuestion } from "../data/choices";

export default function ChoiceCard({
  index,
  choice,
  // showChoiceInfo,
  questionNumber,
  selectedChoice,
  onChoiceClick,
}) {
  const currentLetter = choiceLetters[index];

  return (
    <div className="flex flex-col rounded-lg">
      <div
        className={`group relative flex flex-row items-center gap-5   sm:gap-[36px] 
        cursor-pointer px-5 py-2.5 font-extrabold rounded-t-sm
        ${
          selectedChoice !== currentLetter
            ? "hover:bg-white hover:shadow-lg hover:border-transparent hover:text-[#1a8954]  text-gray-400 border-gray-400 bg-gray-100 border-1"
            : "bg-[#1a8954] shadow-lg text-white"
        }`}
        onClick={() => {
          onChoiceClick(currentLetter);
        }}
      >
        <div className="hidden group-hover:block absolute left-0 w-1.5 h-[90%] bg-[#1a8954] rounded-full"></div>

        <div
          className={`rounded-full aspect-square font-bold flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12
      ${
        selectedChoice !== currentLetter
          ? "bg-gray-100 text-grey-200 group-hover:bg-[#1a8954] group-hover:text-white"
          : "bg-white text-[#1a8954] shadow-lg"
      }`}
        >
          {currentLetter}
        </div>
        <div className="sm:text-lg">{choice}</div>
      </div>

      {/* show the choice info if selected*/}
      {selectedChoice === currentLetter && (
        <div className=" flex justify-around items-center flex-wrap w-full h-auto bg-white rounded-b-sm p-5">
          <div>
            <div>
              <p>
                You chose{" "}
                <span className="font-bold">
                  {
                    choicesPerQuestion[questionNumber][
                      choiceLetters.indexOf(selectedChoice)
                    ]
                  }
                </span>
                !
              </p>
            </div>
            <div>
              <p>{choiceInfo[questionNumber][selectedChoice]}</p>
            </div>
          </div>
          <div>
            <img
              className="w-45 h-45 sm:w-50 sm:h-50 object-cover mt-5 sm:mt-0 rounded-lg"
              src={choiceImages[questionNumber][selectedChoice]}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}

ChoiceCard.propTypes = {
  index: PropTypes.number,
  choice: PropTypes.string,
  questionNumber: PropTypes.number,
  selectedChoice: PropTypes.string,
  onChoiceClick: PropTypes.func,
};
