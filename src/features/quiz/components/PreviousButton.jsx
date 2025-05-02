import React from "react";

export default function PreviousButton() {
  return (
    <button className="flex flex-row items-center justify-between bg-gray-100 w-30 h-10 rounded-full text-gray-400">
      <div className="flex justify-center items-center h-full bg-gray-200 w-10 rounded-full">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <p className="mr-3">Previous</p>
    </button>
  );
}
