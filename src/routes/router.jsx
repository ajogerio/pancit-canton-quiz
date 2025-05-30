import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import HomePage from "../features/home/HomePage";
import QuizPage from "../features/quiz/QuizPage";
import CalculatingResultsPage from "../features/calculatingResults/components/CalculatingResultsPage";
import ExtraHotChiliPage from "../features/results/ExtraHotChiliPage";
import KalamansiPage from "../features/results/KalamansiPage";
import OriginalPage from "../features/results/OriginalPage";
import SweetAndSpicyPage from "../features/results/SweetAndSpicyPage";
import DiscussionPage from "../features/discussion/DiscussionPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/calculating" element={<CalculatingResultsPage />} />
        <Route path="/results/kalamansi" element={<KalamansiPage />} />
        <Route path="/results/sweetandspicy" element={<SweetAndSpicyPage />} />
        <Route path="/results/extrahotchili" element={<ExtraHotChiliPage />} />
        <Route path="/results/original" element={<OriginalPage />} />
        <Route path="/discussion" element={<DiscussionPage />} />
      </Routes>
    </Router>
  );
}
