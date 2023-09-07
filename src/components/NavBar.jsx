import { Link } from "react-scroll";
import { FaHome, FaUser, FaFire } from "react-icons/fa";
import { HiRectangleStack } from "react-icons/hi2";
import { BiSolidMessageDots } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <nav className="fixed bottom-5 lg:bottom-8 w-full overflow-hidden z-50 px-4">
        <div className="container mx-auto">
          <div
            className="w-full h-14 lg:h-20 bg-paragraph/20 backdrop-blur-2xl rounded-full 
                        max-w-[460px] flex justify-between items-center mx-auto px-5 
                        text-btn-text-color text-2xl sm:text-3xl"
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              className="cursor-pointer w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] lg:hover:bg-paragraph/20 duration-300 ease-in-out rounded-full flex justify-center items-center"
            >
              <FaHome />
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-[40px] h-[40px] sm:w-[60px] lg:h-[60px] lg:hover:bg-paragraph/20 duration-300 ease-in-out rounded-full flex justify-center items-center"
            >
              <FaUser />
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] lg:hover:bg-paragraph/20 duration-300 ease-in-out rounded-full flex justify-center items-center"
            >
              <FaFire />
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] lg:hover:bg-paragraph/20 duration-300 ease-in-out rounded-full flex justify-center items-center"
            >
              <HiRectangleStack />
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] lg:hover:bg-paragraph/20 duration-300 ease-in-out rounded-full flex justify-center items-center"
            >
              <BiSolidMessageDots />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
