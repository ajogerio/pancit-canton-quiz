import React from "react";

export default function ProgressBar({ progress = 50 }) {
  return (
    <div className="h-[20px] min-w-[279px] bg-[#898989] rounded-full">
      <div className="h-full bg-green-500 rounded-full" style={{width: `${progress}%` }}></div>
    </div>
  );
}

