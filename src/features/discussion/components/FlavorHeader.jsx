import React from 'react';

export default function FlavorHeader({
  flavorName,
  colorTheme,
  backgroundImage,
  children,
}) {
  return (
    <>
      <div
        className={`relative flex flex-col justify-center items-center min-h-124 
        w-full bg-center bg-repeat`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex flex-col justify-center items-center gap-5 relative z-10 text-white">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl sm:text-5xl text-center">If you got</p>
            <h1 className="text-7xl sm:text-9xl text-center">{flavorName}</h1>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
