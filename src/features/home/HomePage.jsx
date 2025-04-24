import React from 'react';
import CustomComponent from './components/CustomComponent';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl">Welcome to the Pancit Canton Quiz!</h1>
      <CustomComponent caption="This is a Custom Component, Angelo Ogerio. LETS GOOO!" />
    </div>
  );
}
