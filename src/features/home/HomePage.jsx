import React from "react";
import CustomComponent from "./components/CustomComponent";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white gap-4 px-60">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl">
          Welcome to the <br></br>
          <span className="text-[#1a8954]">Pancit Canton</span> Quiz!
        </h1>
        <h2 className="text-xl text-gray-600">
          Embark on a flavorful adventure and discover which Pancit Canton
          flavor matches your personality!
        </h2>
        <button className="text-start bg-[#1a8954] text-white w-fit 
        shadow-xl px-10 py-2 rounded-md hover:cursor-pointer 
         hover:bg-[#166e45] border-2 border-[#1a8954] active:bg-[#115f38]">Start Quiz</button>
      </div>
      <div>
        <img src="/home-page-image-1.png"></img>
      </div>
    </main>
  );
}
