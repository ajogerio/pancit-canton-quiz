import React from "react";
import "../../index.css";

export default function ResultsPage() {
  return (
    <main>
      <section>
        <div
          className="relative flex flex-col justify-center items-center min-h-screen 
        w-full bg-[url(/public/home-page-image-1.png)] bg-center bg-repeat"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex flex-col justify-center items-center relative z-10 text-white">
            <p className="text-5xl">You are</p>
            <h1 className="text-9xl">KALAMANSI</h1>
            <p className="text-5xl">flavor</p>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
