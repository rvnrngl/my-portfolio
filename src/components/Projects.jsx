import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import fashionStep from "../assets/projects/fashion-step.gif";
import colorFill from "../assets/projects/colorFill.gif";
import markdown from "../assets/projects/markdown.gif";
import quoteGenerator from "../assets/projects/quote-generator.png";
import calculator from "../assets/projects/calculator.png";
import miniDrum from "../assets/projects/mini-drum.png";
import padoromo from "../assets/projects/padoromo-clock.png";
import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind.png";
import htmlIcon from "../assets/icons/html-5.png";
import jsIcon from "../assets/icons/js.png";
import javaIcon from "../assets/icons/java.png";
import pythonIcon from "../assets/icons/python.png";
import cssIcon from "../assets/icons/css-3.png";
import Cards from "./Cards";

const icons = [
  {
    name: "HTML",
    src: htmlIcon,
  },
  {
    name: "CSS",
    src: cssIcon,
  },
  {
    name: "JavaScript",
    src: jsIcon,
  },
  {
    name: "React",
    src: reactIcon,
  },
  {
    name: "Tailwind CSS",
    src: tailWindIcon,
  },
  {
    name: "Java",
    src: javaIcon,
  },
  {
    name: "Python",
    src: pythonIcon,
  },
];

const Projects = () => {
  const [isHidden, setIsHidden] = useState(false);

  const getIcons = (names) => {
    const items = icons.filter((item) => names.includes(item.name));
    return items;
  };

  return (
    <section
      id="projects"
      className="w-screen bg-paragraph text-bg-color relative"
    >
      <div className="bg-grain lg:opacity-50 opacity-30"></div>
      <div className="w-full max-w-[1240px] lg:min-h-screen py-8 mx-auto px-6 font-khand flex justify-between items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 place-items-center mb-10">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0 max-w-[400px] lg:max-w-[500px]"
            >
              {/* headlines */}
              <div className="max-w-[400px] lg:max-w-[500px] h-[267.5px] flex flex-col justify-center items-start">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-btn-text-color font-semibold lg:font-bold uppercase leading-[1] mb-4 flex justify-center lg:justify-start items-center gap-1 lg:gap-2 cursor-default">
                  <span className="inline-flex">
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      M
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      y
                    </h1>
                  </span>
                  <span className="inline-flex">
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      P
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      r
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      o
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      j
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      e
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      c
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      t
                    </h1>
                    <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                      s
                    </h1>
                  </span>
                </h2>
                <p className="font-switzer w-full mb-4 text-justify text-lg sm:text-xl lg:text-left">
                  I have accumulated notable projects that showcase my skill in
                  creating responsive websites with user-friendly interfaces and
                  captivating user experiences.
                </p>
                {isHidden == false ? (
                  <Link
                    className="bg-btn-color cursor-pointer text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
                    onClick={() => setIsHidden(true)}
                    smooth={true}
                    duration={100}
                    to="otherProjects"
                    offset={-70}
                  >
                    View all projects
                  </Link>
                ) : (
                  <button
                    className="bg-[#e16162] cursor-not-allowed text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
                  >
                    View all projects
                  </button>
                )}
              </div>
              {/* projects card */}
              <Cards
                name="Fashion Step"
                description="A shoes shop webstite template."
                src={fashionStep}
                srcPages="https://rvnrngl.github.io/fashion-step-website/"
                icons={getIcons([
                  "HTML",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                ])}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-y-10 max-w-[400px] lg:max-w-[500px]"
            >
              <Cards
                name="ColorFill"
                description="An android-based Color Blind Simulator App."
                src={colorFill}
                srcPages="https://github.com/rvnrngl/ColorFill-App"
                icons={getIcons(["Java", "Python"])}
              />
              <Cards
                name="Quote Machine Generator"
                description="A website that generates random quotes."
                src={quoteGenerator}
                srcPages="https://rvnrngl.github.io/random-quote-machine/"
                icons={getIcons(["HTML", "CSS", "JavaScript", "React"])}
              />
            </motion.div>
          </div>
          {/* collapsible cards */}
          <div id="otherProjects">
            <div
              className={
                isHidden === true
                  ? "grid lg:grid-cols-2 gap-y-10 place-items-center mx-auto mb-10"
                  : "hidden"
              }
            >
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-2 lg:col-span-1"
              >
                <Cards
                  name="Calculator"
                  description="An Ios clone calculator app."
                  src={calculator}
                  srcPages="https://rvnrngl.github.io/simple-calculator/"
                  icons={getIcons([
                    "HTML",
                    "JavaScript",
                    "React",
                    "Tailwind CSS",
                  ])}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-2 lg:col-span-1"
              >
                <Cards
                  name="Mini Drum"
                  description="A simple mini drum machine app."
                  src={miniDrum}
                  srcPages="https://rvnrngl.github.io/mini-drum-machine/"
                  icons={getIcons([
                    "HTML",
                    "JavaScript",
                    "React",
                    "Tailwind CSS",
                  ])}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-2 lg:col-span-1"
              >
                <Cards
                  name="Padoromo Clock"
                  description="A simple session and break time clock."
                  src={padoromo}
                  srcPages="https://rvnrngl.github.io/padoromo-clock/"
                  icons={getIcons([
                    "HTML",
                    "JavaScript",
                    "React",
                    "Tailwind CSS",
                  ])}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-2 lg:col-span-1"
              >
                <Cards
                  name="MarkDown Previewer"
                  description="A simple markdown previewer website."
                  src={markdown}
                  srcPages="https://rvnrngl.github.io/markdown-previewer/"
                  icons={getIcons(["HTML", "CSS", "JavaScript", "React"])}
                />
              </motion.div>
              <Link
                to="projects"
                smooth={true}
                duration={300}
                onClick={() =>
                  setTimeout(() => {
                    setIsHidden(false);
                  }, 500)
                }
                className=" col-span-2 cursor-pointer bg-btn-color text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
              >
                View Less
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
