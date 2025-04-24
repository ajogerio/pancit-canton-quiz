import React from 'react';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Choices from './components/Choices';

export default function QuizPage() {
  return (
    <main className="flex flex-col items-center min-h-screen mx-[130px]">
      <ProgressBar />
      <Question />
      <Choices />
    </main>
  );
}
