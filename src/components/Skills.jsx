import React from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import htmlIcon from "../assets/icons/html-5.png";
import cssIcon from "../assets/icons/css-3.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind.png";
import viteIcon from "../assets/icons/vite.svg";
import javaIcon from "../assets/icons/java.png";
import pythonIcon from "../assets/icons/python.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";

const icons = [
  {
    src: htmlIcon,
    duration: 0.5,
  },
  {
    src: cssIcon,
    duration: 0.4,
  },
  {
    src: jsIcon,
    duration: 0.3,
  },
  {
    src: reactIcon,
    duration: 0.2,
  },
  {
    src: tailWindIcon,
    duration: 0.1,
  },
  {
    src: viteIcon,
    duration: 0.5,
  },
  {
    src: javaIcon,
    duration: 0.4,
  },
  {
    src: pythonIcon,
    duration: 0.3,
  },
  {
    src: gitIcon,
    duration: 0.2,
  },
  {
    src: githubIcon,
    duration: 0.1,
  },
];

const skillsSet = [
  {
    name: "HTML/CSS",
    duration: 0.1,
    description: `My journey in learning HTML and CSS has been a creative adventure, mastering 
        responsive design with media queries, flex and etc. From structuring content to designing 
        visually appealing websites. But the learning journey continues as I explore new techniques 
        in web design.`,
  },
  {
    name: "Programming Languages",
    duration: 0.2,
    description: `I have developed a strong programming foundation in JavaScript, Java, and Python. 
        Currently, my primary focus is on learning and mastering JavaScript, as I dive deeper 
        into its intricacies and explore its immense potential for web development.`,
  },
  {
    name: "Frameworks/Libraries",
    duration: 0.3,
    description: `I'm currently learning React and Tailwind, two powerful frameworks and libraries 
        for web development. React allows me to build dynamic user interfaces, while Tailwind's 
        utility classes streamline the styling process, helping me create responsive and visually 
        appealing websites more efficiently.`,
  },
  {
    name: "Git and Github",
    duration: 0.4,
    description: `While still in the learning process, I have acquired knowledge and familiarity 
        with Git and GitHub. Understanding the fundamentals of version control and using Git 
        commands has allowed me to collaborate on projects and manage code effectively, while 
        exploring GitHub's features for repository hosting and collaboration.`,
  },
  {
    name: "Mobile Developemnt",
    duration: 0.5,
    description: `I began exploring Android development using Android Studio for my thesis. I 
    have gained foundational knowledge in creating interfaces, implementing functionality, 
    and testing applications. I'm enthusiastic about expanding my skills and knowledge in this 
    exciting field.`,
  },
];

const Skills = () => {
  return (
    <>
      <div className="w-screen relative">
        <div className="lg:opacity-90 opacity-50"></div>
        <section
          id="skills"
          className="w-full max-w-[1240px] lg:h-screen py-8 mx-auto px-6 font-khand flex justify-center items-center"
        >
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 lg:place-items-center justify-center gap-12 lg:gap-4">
              {/* text */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-[400px] mx-auto lg:max-w-[600px] text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold lg:font-bold uppercase leading-[1] mb-4 flex justify-center lg:justify-start items-center gap-1 lg:gap-2 cursor-default">
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
                <h3 className="font-switzer text-paragraph w-full max-w-[500px] mb-4 text-justify text-lg sm:text-xl lg:text-left">
                  I have acquired skills in Front End development, allowing me
                  to create interactive user interfaces and build responsive web
                  applications that provide exceptional user experiences.
                </h3>
                {/* icons */}
                <div className="grid grid-cols-5 gap-1 sm:gap-3 mx-auto lg:mx-0 w-fit mb-6">
                  {icons.map((items, index) => {
                    return (
                      <motion.li
                        variants={fadeIn("right", items.duration)}
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
                          className=" mix-blend-luminosity group-hover:mix-blend-normal"
                          src={items.src}
                          alt={`img-${index}`}
                        />
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
              {/* skills */}
              <div className="h-full lg:h-[50%] w-full max-w-[400px] lg:max-w-[600px] lg:overflow-y-scroll lg:cursor-pointer [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {skillsSet.map((items, index) => {
                  return (
                    <motion.div
                      variants={fadeIn("left", items.duration)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.3 }}
                      key={index}
                    >
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#e16162]">
                        {items.name}
                      </h1>
                      <p className="font-switzer text-paragraph pb-3 text-justify text-lg sm:text-xl lg:text-left border-b border-paragraph border-opacity-50">
                        {items.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
