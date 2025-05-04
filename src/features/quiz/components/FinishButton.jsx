import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function FinishButton({ enableFinishButton }) {
  const navigate = useNavigate();
  return (
    <button
      className={`flex flex-row justify-center items-center w-full sm:w-30 h-10 rounded-full 
      ${
        enableFinishButton
          ? "bg-[#1a8954] text-white shadow-lg hover:bg-white hover:text-[#1a8954] hover:cursor-pointer active:scale-95 active:text-[#166e45]"
          : "bg-gray-100 text-gray-400 hover:cursor-not-allowed"
      }`}
      disabled={!enableFinishButton}
      onClick={() => {navigate("/calculating")}}
    >
      <p>Finish</p>
    </button>
  );
}

FinishButton.propTypes = {
  enableFinishButton: PropTypes.bool,
};
