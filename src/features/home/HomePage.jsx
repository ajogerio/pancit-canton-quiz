import React from "react";
import CustomComponent from "./components/CustomComponent";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col 2xl:flex-row items-center justify-center min-h-screen bg-white 2xl:gap-4 2xl:px-60 px-8 p-20">
      <div className="flex flex-col gap-5 flex-1">
        <h1 className="text-6xl text-center 2xl:text-left">
          Welcome to the <br></br>
          <span className="text-[#1a8954]">Pancit Canton</span> Quiz!
        </h1>
        <h2 className="text-xl text-gray-600 text-center 2xl:text-left">
          Embark on a flavorful adventure and discover which Pancit Canton
          flavor matches your personality!
        </h2>
        <button
          className="mx-auto bg-[#1a8954] text-white w-fit 
        shadow-xl px-10 py-2 rounded-md hover:cursor-pointer 
         hover:bg-[#166e45] border-2 border-[#1a8954]  active:bg-[#115f38] 2xl:mx-0"
          onClick={() => {
            navigate("/quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
      <div className="flex flex-1 justify-center">
        <img
          className="h-auto w-full max-w-md object-contain flex-shrink-0"
          src="/home-page-image-1.png"
        ></img>
      </div>
    </main>
  );
}
