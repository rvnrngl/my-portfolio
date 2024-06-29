import React from "react";
import Resume from "../assets/resumeAuthor.pdf";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header id="head" className="w-full max-w-[1240px] h-[140px] mx-auto px-6">
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center">
          <a href="#" className="group z-[2]">
            <h1
              className="font-khand uppercase font-semibold lg:font-bold text-[#e16162] text-3xl md:text-4xl flex items-center 
                        duration-200 ease-in group-hover:text-paragraph group-hover:drop-shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px]"
            >
              <span className="text-paragraph text-4xl md:text-5xl group-hover:text-[#e16162]">
                &#123;
              </span>
              RR
              <span className="text-paragraph text-4xl md:text-5xl group-hover:text-[#e16162]">
                &#125;
              </span>
            </h1>
          </a>
          <a
            href={Resume}
            target="_blank"
            className="bg-btn-color text-btn-text-color text-sm sm:text-lg md:text-xl font-khand font-semibold lg:font-bold rounded-sm p-[6px] px-2 lg:p-2 lg:px-4 
                          flex justify-center items-center duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px] z-[2]"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
