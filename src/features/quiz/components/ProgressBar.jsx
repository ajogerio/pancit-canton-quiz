import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar({ progress }) {
  return (
    <div className="h-3 min-w-[279px] bg-[#75c69d] rounded-full">
      <div
        className="h-full bg-[#0d683c] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
};
