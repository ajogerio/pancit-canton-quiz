import React from 'react'

export default function NextButton() {
  return (
    <button className="flex flex-row items-center justify-between bg-gray-100 w-full sm:w-30 h-10 rounded-full text-gray-400">
      <p className="ml-7">Next</p>
      <div className="flex justify-center items-center h-full bg-gray-200 w-10 rounded-full">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </button>
  )
}
