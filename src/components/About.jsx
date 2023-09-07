import React from "react";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Gif from "../assets/imgAbout.gif";
import Resume from "../assets/resumeAuthor.pdf";
import htmlIcon from "../assets/icons/html-5.png";
import cssIcon from "../assets/icons/css-3.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import tailWindIcon from "../assets/icons/tailwind.png";

const icons = [
  {
    src: htmlIcon,
    duration: 0.4,
  },
  {
    src: cssIcon,
    duration: 0.5,
  },
  {
    src: jsIcon,
    duration: 0.6,
  },
  {
    src: reactIcon,
    duration: 0.7,
  },
  {
    src: tailWindIcon,
    duration: 0.8,
  },
];

const About = () => {
  return (
    <section id="about" className="w-screen min-h-screen bg-paragraph relative">
      <div className="lg:opacity-50 opacity-30"></div>
      <div className="w-full max-w-[1240px] min-h-screen py-8 mx-auto px-6 font-khand text-bg-color flex justify-center items-center">
        <div className="container mx-auto grid lg:grid-cols-2 lg:place-items-center lg:gap-4">
          {/* image */}
          <div className="mb-4 overflow-hidden">
            <motion.img
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              whileHover={{
                transition: { duration: 0.2, ease: easeInOut },
                scale: 1.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              src={Gif}
              alt="Coding"
              className="mix-blend-darken w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] mx-auto lg:mx-0"
            />
          </div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-btn-text-color text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-bold uppercase leading-[1] mb-4 flex justify-center lg:justify-start items-center gap-1 lg:gap-2 cursor-default">
              <span className="inline-flex">
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  A
                </h1>
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  B
                </h1>
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  O
                </h1>
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  U
                </h1>
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  T
                </h1>
              </span>
              <span className="inline-flex">
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  M
                </h1>
                <h1 className="hover:text-[#e16162] duration-200 ease-in-out hover:-translate-y-1">
                  E
                </h1>
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-auto max-w-[400px] lg:max-w-[600px] font-medium lg:font-semibold mb-4">
              I'm a Computer Science fresh graduate with background in Web
              Development.
            </h3>
            <div className="mb-4 mx-auto lg:mx-0 gap-1 sm:gap-3 flex justify-center lg:justify-start items-center max-w-[400px] lg:max-w-[600px]">
              {icons.map((items, index) => {
                return (
                  <motion.li
                    variants={fadeIn("left", items.duration)}
                    initial="hidden"
                    whileInView={"show"}
                    whileHover={{
                      translateX: "-2px",
                      transition: { duration: 0.2, ease: easeInOut },
                      boxShadow: "5px 5px 0px #e16162",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    key={index}
                    className="list-none group bg-btn-text-color w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 flex justify-center items-center rounded-md hover:z-10"
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
            <p className="font-switzer text-lg sm:text-xl mb-4 mx-auto lg:mx-0 text-justify max-w-[400px] lg:max-w-[600px]">
              I am dedicated to expanding my skills and creating visually
              appealing and interactive user interfaces. I am eager to
              contribute to development teams, continuously learn, and deliver
              innovative solutions.
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-2 pb-4">
              <Link
                className="bg-btn-color cursor-pointer text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
                smooth={true}
                duration={300}
                to="contact"
              >
                Contact Me
              </Link>
              <a
                href={Resume}
                target="_blank"
                className="text-btn-text-color hover:bg-btn-text-color underline underline-offset-[12px] hover:no-underline text-md sm:text-xl md:text-2xl font-khand font-semibold lg:font-bold rounded-sm p-2 
                                duration-200 ease-in hover:text-paragraph hover:shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
              >
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
