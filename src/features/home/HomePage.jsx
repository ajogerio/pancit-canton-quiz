import React from "react";
import CustomComponent from "./components/CustomComponent";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white gap-4 px-60 p-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl text-center lg:text-left">
          Welcome to the <br></br>
          <span className="text-[#1a8954]">Pancit Canton</span> Quiz!
        </h1>
        <h2 className="text-xl text-gray-600 text-center lg:text-left">
          Embark on a flavorful adventure and discover which Pancit Canton
          flavor matches your personality!
        </h2>
        <button
          className="mx-auto bg-[#1a8954] text-white w-fit 
        shadow-xl px-10 py-2 rounded-md hover:cursor-pointer 
         hover:bg-[#166e45] border-2 border-[#1a8954]  active:bg-[#115f38] lg:mx-0"
          onClick={() => {
            navigate("/quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
      <div>
        <img
          className="h-120 w-150 object-contain"
          src="/home-page-image-1.png"
        ></img>
      </div>
    </main>
  );
}
