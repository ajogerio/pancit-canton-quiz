import React from 'react';
import FlavorHeader from './components/FlavorHeader';
import FlavorDescription from './components/FlavorDescription';

export default function DiscussionPage() {
  return (
    <main>
      <section>
        <div
          className={`relative flex flex-col justify-center items-center min-h-screen 
        w-full bg-center bg-repeat`}
          style={{ backgroundImage: `url(/all_pancit.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex flex-col justify-center items-center gap-5 relative z-10 text-white">
            <div className="flex flex-col justify-center items-center">
              <p className="text-5xl">What the</p>
              <h1 className="text-9xl">Pancit???</h1>
              <p className="text-3xl">
                There’s something about Pancit Canton. The way we always go back
                to it…
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-15 pt-25 pb-10 px-30">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl text-center">
            It’s THE Filipino comfort food.
          </h1>
          <span className="text-center">
            This is exactly what their branding is all about—the feeling of
            nostalgia and familiarity. This is what makes us keep coming back.
            Pancit Canton’s branding techniques are undeniably effective,
            staying on top of the Philippine market until today since 1991. How
            do they do it?
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-15 py-10 px-30">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className={`text-5xl`}>CONSISTENCY.</h1>
          <span className="text-center py-2">
            Yes, visuals may get updated according to current design trends, but
            they keep everything else{' '}
            <span className="font-bold">familiar</span>
            —from the iconic name to the recognizable colors, and most
            importantly, the taste. It’s the same taste, anytime and anywhere.
            This establishes customer trust and loyalty.
          </span>
          <span className="text-center py-2 font-bold text-lg">
            It’s the same taste, anytime and anywhere.
          </span>
          <span className="text-center">
            This establishes customer trust and loyalty.
          </span>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-15 py-10 px-30">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className={`text-5xl`}>EMOTIONAL APPEAL.</h1>
          <span className="text-center py-2">
            From this sense of familiarity comes a feeling of{' '}
            <span className="font-bold">nostalgia.</span>
          </span>
          <span className="text-center py-2">
            As we’ve been having this meal since we were kids, it’s something we
            keep on looking for later in life.
          </span>
          <span className="text-center py-2">
            They make us picture fond memories of eating merienda happily with
            our family—reminding us of our{' '}
            <span className="font-bold">home</span> no matter where we are.
          </span>
        </div>
      </section>

      <section>
        <FlavorHeader
          flavorName="Extra Hot Chili"
          colorTheme="#a11b11"
          backgroundImage="/extra-hot-chili-package.png"
        />
        <FlavorDescription>
          <span className="text-center text-5xl py-2 text-[#a11b11]">
            🌶️🌶️🌶️ The Bold Firestarter 🌶️🌶️🌶️
          </span>
          <span className="text-center py-2">
            The dominant color is red—globally associated with intensity, danger
            and passion. In color psychology, it stimulates faster
            decision-making, increases heart rate, and is linked with bold
            (spicy, even) experiences. The aggressive red background of the
            packaging signals the consumer to prepare for a hot and thrilling
            sensory experience!
          </span>
          <span className="text-center py-2">
            The noodles are displayed in a circular white plate, isolating the
            product and elevating it as the main focal point of the radial
            balance exhibited in the packaging. Emanating from the plate, the
            radiating noodles and garnish imply explosion and movement, visually
            mirroring the burst of heat one expects from spicy food. The
            composition creates a dynamic energy, drawing the eye in.
          </span>
        </FlavorDescription>
      </section>
    </main>
  );
}
