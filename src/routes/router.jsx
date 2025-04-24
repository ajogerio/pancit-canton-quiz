import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Start from '../pages/Start';
import Quiz from '../pages/Quiz';
import Results from '../pages/Results';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}
