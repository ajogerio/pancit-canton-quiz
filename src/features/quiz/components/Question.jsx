import React from "react";
import PropTypes from "prop-types";
import { questions } from "../data/questions";

export default function Question({ questionNumber, questionsTotal }) {
  return (
    <div>
      <div>
        <p>
          Question {questionNumber}/{questionsTotal}
        </p>
      </div>
      <div>
        <p>{questions[questionNumber]}</p>
      </div>
    </div>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.number,
  questionsTotal: PropTypes.number,
};
