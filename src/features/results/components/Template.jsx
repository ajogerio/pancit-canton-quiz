import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "motion/react";

export default function Template({
  flavorName,
  choiceLetter,
  colorTheme,
  backgroundImage,
  // descriptionText,
  // descriptionImage,
  // otherFlavors,
}) {
  const navigate = useNavigate();
  const descriptionSectionRef = useRef(null);
  const descriptionHeaderRef = useRef(null);
  const damnContentRef = useRef(null);

  const isHeaderInView = useInView(descriptionHeaderRef, { once: true });

  const [whyButtonClicked, setWhyButtonClicked] = useState(false);
  const [whatButtonClicked, setWhatButtonClicked] = useState(false);
  const [damnButtonClicked, setDamnButtonClicked] = useState(false);

  useEffect(() => {
    if (damnButtonClicked && damnContentRef.current) {
      damnContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [damnButtonClicked]);
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-5xl"
              >
                You are
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="sm:text-8xl lg:text-9xl text-7xl text-center"
              >
                {flavorName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-5xl"
              >
                flavor
              </motion.p>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
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
              onClick={() =>
                descriptionSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`text-[${colorTheme}] rounded-full px-5 py-3 tracking-wider
              hover:cursor-pointer`}
            >
              SEE YOUR RESULTS 🍜
            </motion.button>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-start items-center gap-15 py-10 sm:px-30 px-10 min-h-screen"
        ref={descriptionSectionRef}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <motion.h1
            ref={descriptionHeaderRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              color: colorTheme,
            }}
            className={`text-5xl text-center`}
          >
            How did you get {flavorName}?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: colorTheme,
            }}
            className={`h-1 w-20`}
          ></motion.div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center text-gray-700 leading-relaxed space-y-4 text-lg max-w-2xl text-justify">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            After calculating, analyzing, and interpreting your answers we have
            come to the conclusion that you are{" "}
            <span className="font-bold">{flavorName}</span> pancit canton!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            viewport={{ once: true }}
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
            onClick={() => setWhyButtonClicked(!whyButtonClicked)}
            className={`border-2 border-outline-[${colorTheme}] rounded-full border-solid 
                text-[${colorTheme}] py-2 px-5 tracking-wider hover:cursor-pointer hover:bg-[${colorTheme}]
                hover:text-white`}
          >
            Why?
          </motion.button>

          {whyButtonClicked && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="italic">Why?</span> {" "}Well, uhm. Actually…{" "}
                <span className="font-semibold">we don’t know.</span>
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                viewport={{ once: true }}
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
                onClick={() => setWhatButtonClicked(!whatButtonClicked)}
                className={`border-2 border-outline-[${colorTheme}] rounded-full border-solid 
                text-[${colorTheme}] py-2 px-5 tracking-wider hover:cursor-pointer hover:bg-[${colorTheme}]
                hover:text-white`}
              >
                What?
              </motion.button>
            </>
          )}
          {whatButtonClicked && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Yeah. If you thought each of your answers to each question
                carefully influenced your final flavor, well you are
                <span className="font-semibold"> wrong.</span> The only thing
                that truly mattered was your answer to the{" "}
                <span className="underline">last question</span>.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                viewport={{ once: true }}
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
                onClick={() => {
                  setDamnButtonClicked(!damnButtonClicked);
                }}
                className={`border-2 border-outline-[${colorTheme}] rounded-full border-solid 
                text-[${colorTheme}] py-2 px-5 tracking-wider hover:cursor-pointer hover:bg-[${colorTheme}]
                hover:text-white self-center`}
              >
                Damn.
              </motion.button>
            </>
          )}

          {damnButtonClicked && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col align-center"
                ref={damnContentRef}
              >
                <motion.p>
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
                </motion.p>

                <p>
                  So we&apos;re guessing you picked {choiceLetter} in the last
                  question. That&apos;s why you&apos;re in this {flavorName}{" "}
                  page.
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
                  Just like how many of our choices in life and the culture
                  industry are{" "}
                  <span className="underline">
                    shaped — or even controlled — by larger capitalist
                    industries
                  </span>{" "}
                  as introduced to us by Adorno and friends in our Arts class.
                  Welcome to{" "}
                  <span className="font-bold italic">Pancit Capitalism™</span>
                </p>

                <p>
                  But, since you&apos;re still here, let&apos;s discover brand
                  psychologies behind Pancit Canton, and connect them to other
                  lessons in our Arts class in our discussion page.
                </p>
              </motion.div>
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
                onClick={() => navigate("/discussion")}
              >
                Proceed to Discussion
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

Template.propTypes = {
  flavorName: PropTypes.string,
  colorTheme: PropTypes.string,
  choiceLetter: PropTypes.string,
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
