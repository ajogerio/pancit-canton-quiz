import React from "react";
import PropTypes from "prop-types";
export default function NextButton({ enableNextButton, setQuestionNumber }) {
  console.log(`Enable Next: ${enableNextButton}`);
  return (
    <button
      className={`group flex flex-row items-center justify-between w-full sm:w-30 
      h-10 rounded-full ${
        enableNextButton
          ? "bg-[#1a8954] text-white shadow-lg hover:bg-white hover:text-[#1a8954] hover:cursor-pointer active:scale-95 active:text-[#166e45]"
          : "bg-gray-100  text-gray-400 hover:cursor-not-allowed"
      }`}
      disabled={!enableNextButton}
      onClick={() => {
        setQuestionNumber((prev) => prev + 1);
      }}
    >
      <p className="ml-7">Next</p>
      <div
        className={`flex justify-center items-center h-full  w-10 rounded-full ${
          enableNextButton
            ? "bg-white text-[#1a8954] group-hover:bg-[#1a8954] group-hover:text-white group-active:bg-[#166e45]"
            : "bg-gray-200"
        }`}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </button>
  );
}

NextButton.propTypes = {
  enableNextButton: PropTypes.bool,
  setQuestionNumber: PropTypes.func,
};
