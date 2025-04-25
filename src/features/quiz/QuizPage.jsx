import React from 'react';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Choices from './components/Choices';

export default function QuizPage() {
  return (
    <main className="flex flex-col items-center min-h-screen mx-auto py-[18px]">
      <ProgressBar />
      <Question />
      <Choices />
    </main>
  );
}
