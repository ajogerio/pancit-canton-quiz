import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CalculatingResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastAnswer = location.state.lastAnswer;

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (lastAnswer) {
        case "A":
          navigate("/results/kalamansi");
          break;
        case "B":
          navigate("/results/original");
          break;
        case "C":
          navigate("/results/sweetandspicy");
          break;
        case "D":
          navigate("/results/extrahotchili");
          break;
        default:
          navigate("/results/kalamansi");
          break;
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate, lastAnswer]);

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
