import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar({ progress }) {
  return (
    <div className="h-[20px] min-w-[279px] bg-[#dc3e26] rounded-full">
      <div
        className="h-full bg-[#81cad6] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
};
