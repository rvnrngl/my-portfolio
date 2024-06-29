import React from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind.png";
import csharpIcon from "../assets/icons/csharp.png";
import dotnetIcon from "../assets/icons/dotnet.png";
import mysqlIcon from "../assets/icons/mysql.png";
import jqueryIcon from "../assets/icons/jquery.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";

import htmlIcon from "../assets/icons/html-5.png";
import cssIcon from "../assets/icons/css-3.png";
import jsIcon from "../assets/icons/js.png";
import nextIcon from "../assets/icons/nextjs.png";
import mongoDBIcon from "../assets/icons/mongodb.png";
import firebaseIcon from "../assets/icons/firebase.png";
import restIcon from "../assets/icons/rest-api-icon.png";
import tsIcon from "../assets/icons/ts.png";

import azuredevopsIcon from "../assets/icons/azuredevops.png";
import postmanIcon from "../assets/icons/postman.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import jiraIcon from "../assets/icons/jira.png";
import visualstudioIcon from "../assets/icons/visualstudio.png";
import visualstudiocodeIcon from "../assets/icons/visualstudiocode.png";

import { UseIsMobile } from "./UseIsMobile";

const mainIcons = [
  {
    src: csharpIcon,
    name: "c#",
    duration: 0.3,
  },
  {
    src: dotnetIcon,
    name: "Dotnet",
    duration: 0.3,
  },
  {
    src: mysqlIcon,
    name: "MySQL",
    duration: 0.3,
  },
  {
    src: reactIcon,
    name: "ReactJS",
    duration: 0.3,
  },
  {
    src: tailWindIcon,
    name: "Tailwind",
    duration: 0.3,
  },
  {
    src: jqueryIcon,
    name: "JQuery",
    duration: 0.3,
  },
  {
    src: bootstrapIcon,
    name: "Bootstrap",
    duration: 0.3,
  },
];

const icons = [
  {
    src: htmlIcon,
    name: "HTML",
    duration: 0.5,
  },
  {
    src: cssIcon,
    name: "CSS",
    duration: 0.5,
  },
  {
    src: jsIcon,
    name: "Javascript",
    duration: 0.5,
  },
  {
    src: nextIcon,
    name: "NextJS",
    duration: 0.5,
  },
  {
    src: mongoDBIcon,
    name: "MongoDB",
    duration: 0.5,
  },
  {
    src: restIcon,
    name: "REST",
    duration: 0.5,
  },
  {
    src: tsIcon,
    name: "Typescript",
    duration: 0.5,
  },
  {
    src: firebaseIcon,
    name: "Firebase",
    duration: 0.5,
  },
];

const tools = [
  {
    src: azuredevopsIcon,
    name: "Azure Devops",
    duration: 0.7,
  },
  {
    src: visualstudioIcon,
    name: "Visual Studio",
    duration: 0.7,
  },
  {
    src: visualstudiocodeIcon,
    name: "VS Code",
    duration: 0.7,
  },
  {
    src: gitIcon,
    name: "Git",
    duration: 0.7,
  },
  {
    src: githubIcon,
    name: "Github",
    duration: 0.7,
  },
  {
    src: postmanIcon,
    name: "Postman",
    duration: 0.7,
  },
  {
    src: gitIcon,
    name: "Git",
    duration: 0.7,
  },
  {
    src: jiraIcon,
    name: "Jira",
    duration: 0.7,
  },
];

export const MySkills = () => {
  return (
    <>
      <section
        id="skills"
        className="w-screen bg-paragraph text-bg-color relative"
      >
        <div className="lg:opacity-50 opacity-30"></div>
        <div className="w-full max-w-[1240px] min-h-screen py-8 mx-auto px-6 font-khand flex justify-center items-center">
          <div className="container mx-auto">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-[400px] mx-auto lg:max-w-full text-center flex items-center justify-center flex-col"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold lg:font-bold uppercase leading-[1] mb-4 flex justify-center items-center gap-1 lg:gap-2 cursor-default">
                <span className="inline-flex">
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    M
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    Y
                  </h1>
                </span>
                <span className="inline-flex">
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    S
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    K
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    I
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    L
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    L
                  </h1>
                  <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                    S
                  </h1>
                </span>
              </h2>
              <h3 className="font-switzer text-btn-text-color w-full max-w-[500px] lg:max-w-[600px] mb-4 text-center text-lg sm:text-xl">
                These are the skills in which I am highly proficient, showcasing
                my expertise and experience in various areas of my field.
              </h3>
              {/* main icons */}
              <div className="grid grid-cols-7 gap-1 sm:gap-3 mx-auto lg:mx-0 w-fit mb-6">
                {mainIcons.map((items, index) => {
                  return (
                    <motion.li
                      variants={fadeIn("up", items.duration)}
                      initial="hidden"
                      whileInView={"show"}
                      whileHover={{
                        translateX: "-2px",
                        transition: { duration: 0.2, ease: easeInOut },
                        boxShadow: "5px 5px 0px #e16162",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      key={index}
                      className="list-none group bg-btn-text-color w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 flex justify-center items-center rounded-md hover:z-[2]"
                    >
                      <img
                        className="mix-blend-luminosity group-hover:mix-blend-normal"
                        src={items.src}
                        alt={`img-${index}`}
                      />
                      {/* ToolTip start */}
                      <span
                        class="group-hover:opacity-100 group-hover:duration-900 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-[45px] opacity-0 m-4 mx-auto"
                      >
                        {items.name}
                      </span>
                      {/* ToolTip End */}
                    </motion.li>
                  );
                })}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3x font-semibold mb-4">
                Other Skills
              </h2>
              {/* other icons */}
              <div className="grid grid-flow-col auto-cols-auto gap-1 sm:gap-3 mx-auto lg:mx-0 w-fit mb-6">
                {icons.map((items, index) => {
                  return (
                    <motion.li
                      variants={fadeIn("up", items.duration)}
                      initial="hidden"
                      whileInView={"show"}
                      whileHover={{
                        translateX: "-2px",
                        transition: { duration: 0.2, ease: easeInOut },
                        boxShadow: "5px 5px 0px #e16162",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      key={index}
                      className="list-none group bg-btn-text-color w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 flex justify-center items-center rounded-md hover:z-[2]"
                    >
                      <img
                        className="mix-blend-luminosity group-hover:mix-blend-normal"
                        src={items.src}
                        alt={`img-${index}`}
                      />
                      {/* ToolTip start */}
                      <span
                        class="group-hover:opacity-100 group-hover:duration-900 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-[45px] opacity-0 m-4 mx-auto"
                      >
                        {items.name}
                      </span>
                      {/* ToolTip End */}
                    </motion.li>
                  );
                })}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3x font-semibold mb-4">
                Tools
              </h2>
              {/* tools */}
              <div className="grid grid-flow-col auto-cols-auto gap-1 sm:gap-3 mx-auto lg:mx-0 w-fit mb-10">
                {tools.map((items, index) => {
                  return (
                    <motion.li
                      variants={fadeIn("up", items.duration)}
                      initial="hidden"
                      whileInView={"show"}
                      whileHover={{
                        translateX: "-2px",
                        transition: { duration: 0.2, ease: easeInOut },
                        boxShadow: "5px 5px 0px #e16162",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      key={index}
                      className="list-none group bg-btn-text-color w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 flex justify-center items-center rounded-md hover:z-[2]"
                    >
                      <img
                        className="mix-blend-luminosity group-hover:mix-blend-normal"
                        src={items.src}
                        alt={`img-${index}`}
                      />
                      {/* ToolTip start */}
                      <span
                        class="group-hover:opacity-100 w-[150%] group-hover:duration-900 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-[45px] opacity-0 m-4 mx-auto"
                      >
                        {items.name}
                      </span>
                      {/* ToolTip End */}
                    </motion.li>
                  );
                })}
              </div>
              {/* button */}
              <Link
                className="bg-btn-color text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                          duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:-translate-x-[2px] cursor-pointer"
                smooth={true}
                duration={300}
                to="projects"
              >
                See my projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
