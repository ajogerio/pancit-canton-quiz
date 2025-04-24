import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import HomePage from '../features/home/HomePage';
import QuizPage from '../features/quiz/QuizPage';
import ResultsPage from '../features/results/ResultsPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}
