import React from "react";
import PropTypes from "prop-types";

export default function PreviousButton({ enableBackButton }) {
  console.log(`Enable back button: ${enableBackButton}`);
  return (
    <button
      className={`flex flex-row items-center justify-between w-full sm:w-30 
    h-10 rounded-full ${
      enableBackButton
        ? "bg-[#1a8954] text-white shadow-lg"
        : "bg-gray-100  text-gray-400"
    }`}
      disabled={!enableBackButton}
    >
      <div
        className={`flex justify-center items-center h-full  w-10 rounded-full ${
          enableBackButton ? "bg-white text-[#1a8954]" : "bg-gray-200"
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
};
