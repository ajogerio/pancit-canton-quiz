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
            <p className="text-5xl">If you picked</p>
            <h1 className="text-9xl">{flavorName}...</h1>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
