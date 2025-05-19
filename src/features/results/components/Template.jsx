import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Template({
  flavorName,
  colorTheme,
  backgroundImage,
  // descriptionText,
  // descriptionImage,
  otherFlavors,
}) {
  const navigate = useNavigate();

  const handleOtherFlavorClick = (flavor) => {
    if (flavor === "Original") {
      navigate("/results/original");
    } else if (flavor === "Kalamansi") {
      navigate("/results/kalamansi");
    } else if (flavor === "Extra Hot Chili") {
      navigate("/results/extrahotchili");
    } else {
      navigate("/results/sweetandspicy");
    }
  };
  return (
    <main>
      <section>
        <div
          className={`relative flex flex-col justify-center items-center min-h-screen 
        w-full bg-center bg-repeat`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex flex-col justify-center items-center gap-5 relative z-10 text-white">
            <div className="flex flex-col justify-center items-center">
              <p className="text-5xl">You are</p>
              <h1 className="text-9xl">{flavorName}</h1>
              <p className="text-5xl">flavor</p>
            </div>
            <button
              style={{
                color: colorTheme,
                backgroundColor: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colorTheme;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = colorTheme;
              }}
              className={`text-[${colorTheme}] rounded-full px-5 py-3 tracking-wider
              hover:cursor-pointer`}
            >
              SEE YOUR RESULTS 🍜
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-15 py-10 px-30 min-h-screen">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1
            style={{
              color: colorTheme,
            }}
            className={`text-5xl`}
          >
            How did you get {flavorName}?
          </h1>
          <div
            style={{
              backgroundColor: colorTheme,
            }}
            className={`h-1 w-20`}
          ></div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-gray-700 leading-relaxed space-y-4 text-lg max-w-2xl">
            <p className="italic">
              Actually… <span className="font-semibold">we don’t know.</span>
            </p>

            <p>
              If you thought each question carefully influenced your final
              flavor, well you are
              <span className="font-semibold"> wrong.</span> The only thing that
              truly mattered was your answer to the{" "}
              <span className="underline">last question</span>.
            </p>

            <p>
              <span className="font-semibold">
                That’s right — just one choice decided everything
              </span>
              . If your answer to the last question was:
              <br />
              <span className="ml-4 block">
                A ➡️{" "}
                <span className="font-bold text-[#1ea913]">
                  You will get the Kalamansi flavor.
                </span>
              </span>
              <span className="ml-4 block">
                B ➡️{" "}
                <span className="font-bold text-[#e8be04]">
                  You will get the Original flavor.
                </span>
              </span>
              <span className="ml-4 block">
                C ➡️{" "}
                <span className="font-bold text-[#e4300b]">
                  You will get the Sweet and Spicy flavor.
                </span>
              </span>
              <span className="ml-4 block">
                D ➡️{" "}
                <span className="font-bold text-[#a11b11]">
                  You will get the Extra Hot Chili flavor
                </span>
              </span>
            </p>

            <p>
              <span className="font-semibold">
                {" "}
                We made you feel like you had control
              </span>
              , when in reality, the outcome was already decided.
            </p>

            <p>
              <span className="font-semibold">
                In short: you were manipulated.
              </span>{" "}
              Just like how many of our choices in life and the culture industry
              are{" "}
              <span className="underline">
                shaped — or even controlled — by larger capitalist industries
              </span>{" "}
              as introduced to us by Adorno and friends in our Arts class.
              Welcome to{" "}
              <span className="font-bold italic">Pancit Capitalism™</span>
            </p>

            <p>
              However, you can still discover brand psychologies behind Pancit
              Canton and their flavors in our discussion page.
            </p>
          </div>
          <button
            style={{
              color: colorTheme,
              borderColor: colorTheme,
              backgroundColor: "white",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colorTheme;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = colorTheme;
            }}
            className={`border-2 border-outline-[${colorTheme}] rounded-full border-solid 
                text-[${colorTheme}] py-2 px-5 tracking-wider hover:cursor-pointer hover:bg-[${colorTheme}]
                hover:text-white`}
          >
            Proceed to Discussion
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-gray-100 py-10 px-5 gap-15 min-h-screen">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-5xl">Check out the other flavors!</h1>
          <div className="bg-black h-1 w-20"></div>
        </div>
        <div className="flex justify-center items-center gap-3">
          {otherFlavors.map((flavor) => (
            <div
              key={flavor.name}
              className="flex flex-col justify-center items-center h-auto bg-white
                        rounded-2xl py-10 gap-2"
            >
              <img className="w-1/2 h-1/2" src={flavor.image} />
              <h1 className={`text-3xl text-[${flavor.color}]`}>
                {flavor.name}
              </h1>
              <button
                style={{
                  backgroundColor: flavor.color,
                  color: "white",
                  borderColor: flavor.color,
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = flavor.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = flavor.color;
                  e.currentTarget.style.color = "white";
                }}
                className={`rounded-full py-2 px-5 hover:cursor-pointer`}
                onClick={() => handleOtherFlavorClick(flavor.name)}
              >
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

Template.propTypes = {
  flavorName: PropTypes.string,
  colorTheme: PropTypes.string,
  backgroundImage: PropTypes.string,
  descriptionText: PropTypes.string,
  descriptionImage: PropTypes.string,
  otherFlavors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};
