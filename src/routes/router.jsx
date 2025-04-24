import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import StartPage from '../features/home/HomePage';
import QuizPage from '../features/quiz/QuizPage';
import ResultsPage from '../features/results/ResultsPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
