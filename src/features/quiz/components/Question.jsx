import React from "react";
import PropTypes from "prop-types";
import { questions } from "../data/questions";

export default function Question({ questionNumber, questionsTotal }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className="text-sm text-center">
          Question {questionNumber}/{questionsTotal}
        </p>
      </div>
      <div>
        <p className="text-2xl text-center">{questions[questionNumber]}</p>
      </div>
    </div>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.number,
  questionsTotal: PropTypes.number,
};
