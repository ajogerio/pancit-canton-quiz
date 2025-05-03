import React from "react";
import PropTypes from "prop-types";

export default function PreviousButton({
  enableBackButton,
  setQuestionNumber,
}) {
  console.log(`Enable back button: ${enableBackButton}`);
  return (
    <button
      className={`group flex flex-row items-center justify-between w-full sm:w-30 
    h-10 rounded-full ${
      enableBackButton
        ? "bg-[#1a8954] text-white shadow-lg hover:bg-white hover:text-[#1a8954] hover:cursor-pointer active:scale-95 active:text-[#166e45]"
        : "bg-gray-100  text-gray-400 hover:cursor-not-allowed"
    }`}
      disabled={!enableBackButton}
      onClick={() => {
        setQuestionNumber((prev) => prev - 1);
      }}
    >
      <div
        className={`flex justify-center items-center h-full  w-10 rounded-full ${
          enableBackButton
            ? "bg-white text-[#1a8954] group-hover:bg-[#1a8954] group-hover:text-white group-active:bg-[#166e45]"
            : "bg-gray-200"
        }`}
      >
        <i className={`fa-solid fa-arrow-left`}></i>
      </div>
      <p className="mr-3">Previous</p>
    </button>
  );
}

PreviousButton.propTypes = {
  enableBackButton: PropTypes.bool,
  setQuestionNumber: PropTypes.func,
};
