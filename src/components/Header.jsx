import React from "react";
import coffee from "../assets/buy-me-a-coffee.svg";

const Header = () => {
  return (
    <header className="w-full max-w-[1240px] h-[140px] mx-auto px-6">
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center">
          <a href="/" className="group">
            <h1
              className="font-khand uppercase font-bold text-[#e16162] text-3xl md:text-4xl flex items-center 
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
          <button
            onClick={() => alert("Not yet implemented!")}
            className="bg-btn-color text-btn-text-color text-sm sm:text-lg md:text-xl font-khand font-bold rounded-sm p-2 pr-4 lg:pr-5 
                          flex justify-center items-center duration-200 ease-in hover:drop-shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
          >
            <img
              className="w-[30px] lg:w-[40px]"
              src={coffee}
              alt="Buy Me a Coffee"
            />
            Buy me a coffee
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
