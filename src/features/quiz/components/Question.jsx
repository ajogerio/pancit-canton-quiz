import React from "react";
import PropTypes from "prop-types";
import { questions } from "../data/questions";

export default function Question({ questionNumber, questionsTotal }) {
  return (
    <div className="flex flex-col items-center sm:items-start w-full flex-wrap gap-2 border-b-gray-200 border-b-3">
      <div>
        <p className="text-base text-center">
          Question {questionNumber}/{questionsTotal}
        </p>
      </div>
      <div>
        <p className="text-lg font-bold text-center">{questions[questionNumber]}</p>
      </div>
    </div>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.number,
  questionsTotal: PropTypes.number,
};
