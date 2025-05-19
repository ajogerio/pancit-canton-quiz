import React from "react";
import FlavorHeader from "./components/FlavorHeader";
import FlavorDescription from "./components/FlavorDescription";

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
              <p className="sm:text-5xl text-3xl text-center">What the</p>
              <h1 className="sm:text-9xl text-8xl text-center">Pancit???</h1>
              <p className="sm:text-3xl px-10 text-xl text-center">
                There’s something about Pancit Canton. The way we always go back
                to it…
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-15 pt-25 pb-10 px-10 sm:px-30">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl text-center">
            It’s THE Filipino comfort food
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
          <h1 className={`text-5xl text-center`}>CONSISTENCY</h1>
          <span className="text-center py-2">
            Yes, visuals may get updated according to current design trends, but
            they keep everything else{" "}
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

      <section className="flex flex-col justify-center items-center gap-15 py-10 px-10 sm:px-30">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className={`text-5xl text-center`}>EMOTIONAL APPEAL</h1>
          <span className="text-center py-2">
            From this sense of familiarity comes a feeling of{" "}
            <span className="font-bold">nostalgia.</span>
          </span>
          <span className="text-center py-2">
            As we’ve been having this meal since we were kids, it’s something we
            keep on looking for later in life.
          </span>
          <span className="text-center py-2">
            They make us picture fond memories of eating merienda happily with
            our family—reminding us of our{" "}
            <span className="font-bold">home</span> no matter where we are.
          </span>
        </div>
      </section>

      <section>
        <FlavorHeader
          flavorName="Kalamansi"
          colorTheme="#1ea913"
          backgroundImage="/home-page-image-1.png"
        />
        <FlavorDescription>
          <p className="flex flex-col items-center justify-center md:flex-row text-center text-5xl py-2 text-[#1ea913]">
            <span className="px-2"> 🍋‍🟩🍋‍🟩🍋‍🟩</span>
            <span className="px-2">The Sharp Thinker</span>
            <span className="px-2"> 🍋‍🟩🍋‍🟩🍋‍🟩</span>
          </p>
          <span className="text-center py-2">
            The dominant color is green—but a lighter, more citrus-associated
            green. This particular shade emphasizes freshness, acidity, and
            natural zest, tied closely to the sensory experience of biting into
            a sour calamansi. In color psychology, green is associated with
            nature, health, and vitality. It evokes feelings of balance and
            harmony, a stark contrast to the boldness of other flavors.
          </span>
          <span className="text-center py-2">
            The composition of the Kalamansi flavor packaging is clean, focused,
            and intentionally minimalist. At the visual center of the dish are
            two vibrant calamansi slices, acting almost like a brand emblem
            within the food—anchoring the viewer’s gaze and highlighting the
            citrus as the core identity. The arrangement of the toppings is
            balanced and orderly, with the curled shrimp and vegetables forming
            soft circular rhythms that reinforce harmony and freshness.
          </span>
        </FlavorDescription>
      </section>

      <section>
        <FlavorHeader
          flavorName="Original"
          colorTheme="#e8be04"
          backgroundImage="/original-package.png"
        />
        <FlavorDescription>
          <p className="flex flex-col items-center justify-center md:flex-row text-center text-5xl py-2 text-[#e8be04]">
            <span className="px-2"> 🍜🍜🍜</span>
            <span className="px-2">The Everyday Icon</span>
            <span className="px-2"> 🍜🍜🍜</span>
          </p>
          <span className="text-center py-2">
            The dominant color is yellow—associated with joy, warmth, and
            accessibility. Psychologically, it triggers hunger, optimism, and
            speed, but it can also signify comfort—the kind you trust, return
            to, and maybe even grew up with. The Original flavor is familiar,
            safe, and an all-time favorite. It appeals to nostalgia and
            tradition in the Filipino consumer psyche, using yellow as a cue for
            reliability and sunny emotional tone.
          </span>
          <span className="text-center py-2">
            The circular plate is centrally aligned, with even distribution of
            various garnishes that make up a balanced whole. No one element
            dominates—just like the flavor itself: balanced and understated. The
            toppings (boiled egg slices, shrimps, vegetable flakes) are not
            stylized or exaggerated—they feel like something you could actually
            recreate at home. It does not try to be extra, but real—making it a
            timeless classic.
          </span>
        </FlavorDescription>
      </section>

      <section>
        <FlavorHeader
          flavorName="Sweet and Spicy"
          colorTheme="#e4300b"
          backgroundImage="/sweet-and-spicy-package.png"
        />
        <FlavorDescription>
          <p className="flex flex-col items-center justify-center md:flex-row text-center text-5xl py-2 text-[#e4300b]">
            <span className="w-full">🔥🍬🔥</span>
            <span>The Harmonizer</span>
            <span className="w-full">🔥🍬🔥</span>
          </p>
          <span className="text-center py-2">
            The dominant color is orange—combining the warmth and comfort of
            sweetness (yellow) with the energy and intensity of spice (red). In
            branding psychology, orange evokes enthusiasm, friendliness, and
            emotional warmth. It’s vibrant but non-threatening—perfect for a
            flavor that promises dual sensations. It feels social and
            expressive—not as aggressive as red, not as soothing as green—orange
            hits the sweet spot. You don’t just eat this flavor; you feel it’s
            approachable with a kick.
          </span>
          <span className="text-center py-2">
            The playful swirl of red pepper at the center mimics a spiral—placed
            almost like a calligraphic stroke or brush mark in Asian art. This
            visual "swoop" adds motion and flair, giving the dish personality.
            The noodle strands twist and curl in energetic swirls, while the
            toppings are scattered with intentional asymmetry. The mix of
            scattered red chili slices and green vegetable flakes mimics a
            dynamism within order, echoing the flavor's duality—sweetness and
            spice colliding in harmony.
          </span>
        </FlavorDescription>
      </section>

      <section>
        <FlavorHeader
          flavorName="Extra Hot Chili"
          colorTheme="#a11b11"
          backgroundImage="/extra-hot-chili-package.png"
        />
        <FlavorDescription>
          <p className="flex flex-col items-center justify-center md:flex-row text-center text-5xl py-2 text-[#a11b11]">
            <span className="px-2"> 🌶️🌶️🌶️</span>
            <span className="px-2">The Bold Firestarter</span>
            <span className="px-2"> 🌶️🌶️🌶️</span>
          </p>
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
