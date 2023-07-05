import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import Image from "../assets/author.png";
import Resume from "../assets/resumeAuthor.pdf";
import { TypeAnimation } from "react-type-animation";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="h-[calc(100vh_-_140px)] w-full max-w-[1240px] py-8 mx-auto px-6 font-khand"
      >
        <div className="container mx-auto pt-[clamp(20px,10vh,150px)]">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="w-full flex flex-col justify-center items-center lg:items-start">
              <div>
                <motion.h1
                  variants={fadeIn("up", 0)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  HI, I'M RAVEN RINGEL
                </motion.h1>
              </div>
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="inline-flex items-center gap-1 md:gap-2 lg:gap-3"
              >
                <span className="text-paragraph text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1]">
                  I am a{" "}
                </span>
                <TypeAnimation
                  sequence={["Developer.", 2000, "Programmer.", 2000]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-[#e16162] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1]"
                />
              </motion.div>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="font-switzer text-paragraph w-full max-w-[500px] py-4 text-center text-lg sm:text-xl lg:text-left"
              >
                I am a dedicated developer with a passion for crafting efficient
                and elegant solutions that elevate user experiences.
              </motion.p>
              {/* button group */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="flex items-center gap-2 pb-4"
              >
                <Link
                  className="bg-btn-color cursor-pointer text-btn-text-color text-md sm:text-xl md:text-2xl font-khand font-bold rounded-sm p-2 
                                duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
                  smooth={true}
                  duration={300}
                  to="contact"
                >
                  Contact Me
                </Link>
                <a
                  href={Resume}
                  target="_blank"
                  className="text-paragraph hover:bg-paragraph underline underline-offset-[12px] hover:no-underline text-md sm:text-xl md:text-2xl font-khand font-bold rounded-sm p-2 
                                duration-200 ease-in hover:text-btn-text-color hover:shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
                >
                  My Resume
                </a>
              </motion.div>
              {/* icons */}
              <div className="text-paragraph flex items-center gap-2">
                <motion.a
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{
                    translateX: "-2px",
                    transition: { duration: 0.2, ease: easeInOut },
                    filter: "drop-shadow(5px 5px 0px #000000)",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  href="https://www.facebook.com/raven.ringel/"
                  target="_blank"
                  className="hover:text-[#e16162] drop-shadow-none"
                >
                  <AiFillFacebook size={40} />
                </motion.a>
                <motion.a
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{
                    translateX: "-2px",
                    transition: { duration: 0.2, ease: easeInOut },
                    filter: "drop-shadow(5px 5px 0px #000000)",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  href="https://www.linkedin.com/in/raven-ringel-34aa77273/"
                  target="_blank"
                  className="hover:text-[#e16162] drop-shadow-none"
                >
                  <AiFillLinkedin size={40} />
                </motion.a>
                <motion.a
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{
                    translateX: "-2px",
                    transition: { duration: 0.2, ease: easeInOut },
                    filter: "drop-shadow(5px 5px 0px #000000)",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  href="https://twitter.com/Raven47261939"
                  target="_blank"
                  className="hover:text-[#e16162] drop-shadow-none"
                >
                  <AiFillTwitterSquare size={40} />
                </motion.a>
                <motion.a
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  whileHover={{
                    translateX: "-2px",
                    transition: { duration: 0.2, ease: easeInOut },
                    filter: "drop-shadow(5px 5px 0px #000000)",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  href="https://github.com/rvnrngl"
                  target="_blank"
                  className="hover:text-[#e16162] drop-shadow-none"
                >
                  <FaGithubSquare size={36.5} />
                </motion.a>
              </div>
            </div>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              whileHover={{
                translateX: "-25px",
                translateY: "-25px",
                transition: { duration: 0.2, ease: easeInOut },
                boxShadow: "40px 40px 0px rgba(0,0,0,0.5)",
              }}
              style={{
                translateX: "-20px",
                translateY: "-20px",
                boxShadow: "20px 20px 0px rgba(0,0,0,0.5)",
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="hidden lg:block w-[400px] h-[300px] opacity-80 bg-paragraph border-2 border-btn-text-color rounded-md 
                            overflow-hidden relative mr-20"
            >
              <img
                src={Image}
                alt="author"
                className="absolute left-0 top-[-55px] mix-blend-darken"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
