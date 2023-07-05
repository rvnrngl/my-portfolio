import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import fashionStep from "../assets/projects/fashion-step.gif";
import markdown from "../assets/projects/markdown.gif";
import quoteGenerator from "../assets/projects/quote-generator.png";
import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind.png";
import viteIcon from "../assets/icons/vite.svg";
import Cards from "./Cards";

const icons = [
  {
    name: "Vite",
    src: viteIcon,
  },
  {
    name: "React",
    src: reactIcon,
  },
  {
    name: "Tailwind CSS",
    src: tailWindIcon,
  },
];

const Projects = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <section id="projects" className="w-screen bg-paragraph text-bg-color">
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-btn-text-color font-bold uppercase leading-[1] mb-4">
                  My Projects
                </h2>
                <p className="font-switzer w-full mb-4 text-justify text-lg sm:text-xl lg:text-left">
                  I have accumulated notable projects that showcase my skill in
                  creating responsive websites with user-friendly interfaces and
                  captivating user experiences.
                </p>
                {isHidden == false ? (
                  <Link
                    className="bg-btn-color cursor-pointer text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
                    onClick={() => setIsHidden(true)}
                    smooth={true}
                    duration={300}
                    to="otherProjects"
                    offset={-70}
                  >
                    View all projects
                  </Link>
                ) : (
                  <button
                    className="bg-[#e16162] cursor-not-allowed text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
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
                icons={icons}
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
                name="MarkDown Previewer"
                description="A simple markdown previewer website."
                src={markdown}
                icons={icons}
              />
              <Cards
                name="Quote Machine Generator"
                description="A website that generates random quotes."
                src={quoteGenerator}
                icons={icons}
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
                  name="MarkDown Previewer"
                  description="A simple markdown previewer website."
                  src={markdown}
                  icons={icons}
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
                  icons={icons}
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
                  name="MarkDown Previewer"
                  description="A simple markdown previewer website."
                  src={markdown}
                  icons={icons}
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
                  icons={icons}
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
                className=" col-span-2 cursor-pointer bg-btn-color text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] w-fit"
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
