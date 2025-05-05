import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CalculatingResultsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <img src="/pan-1.png" className="w-50 h-50 animate-toss"></img>
      </div>
      <div>
        <p className="text-2xl font-bold">
          Tindera is cooking<span className="dots"></span>{" "}
        </p>
      </div>
    </main>
  );
}
