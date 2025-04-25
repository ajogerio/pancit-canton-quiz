import React from "react";
import PropTypes from "prop-types";

export default function Question({ questionNumber, questionsTotal }) {
  return (
    <div>
      <div>
        <p>Question {questionNumber}/{questionsTotal}</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultrices libero lacus, vitae faucibus felis porta eu. Nullam tortor
          turpis, pulvinar sit amet tincidunt ac, tempus eu lorem. Phasellus
          vitae molestie quam. Cras non lacus enim.
        </p>
      </div>
    </div>
  );
}

Question.propTypes = {
  questionNumber: PropTypes.number,
  questionsTotal: PropTypes.number,
};
