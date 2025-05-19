import React from 'react';

export default function FlavorDescription({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-30 px-30">
      {children}
    </div>
  );
}
