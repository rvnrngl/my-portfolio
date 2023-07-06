import React from "react";

const Cards = ({ name, description, src, srcPages, icons }) => {
  return (
    <>
      <div
        className="group relative max-w-[400px] lg:max-w-[500px] h-[267.5px] overflow-hidden border-2 border-bg-color text-headline rounded-md 
                        shadow-[20px_20px_0px_rgba(0,0,0,0.8)] hover:shadow-[30px_30px_0px_rgba(0,0,0,0.8)] transition-all duration-200"
      >
        {/* hover */}
        <div className=" group-hover:bg-btn-text-color/80 w-full h-full absolute z-30 transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 transition-all duration-300 w-full h-full object-cover"
          src={src}
          alt="fashion-step image"
        />
        <div className="absolute -bottom-full left-4 lg:left-6 group-hover:bottom-[30%] transition-all duration-300 z-50">
          <span className="text-md md:text-2xl font-semibold">{name}</span>
        </div>
        <div className="absolute -bottom-full left-4 lg:left-6 group-hover:bottom-[20%] transition-all duration-500 z-50">
          <p className="text-paragraph text-sm md:text-xl">{description}</p>
        </div>
        <div className="absolute -bottom-full left-4 lg:left-6 group-hover:bottom-[7%] transition-all duration-700 z-50">
          <div className="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] flex gap-3 items-center opacity-80">
            {icons.map((items) => {
              return (
                <img
                  key={items.name}
                  className="hover:opacity-100"
                  src={items.src}
                  alt={items.name}
                />
              );
            })}
          </div>
        </div>
        <div className="absolute -bottom-full right-4 lg:right-6 group-hover:bottom-[7%] transition-all duration-700 z-50">
          <a
            href={srcPages}
            target="_blank"
            className="text-paragraph cursor-pointer hover:bg-paragraph underline underline-offset-[12px] hover:no-underline text-sm lg:text-md font-khand font-semibold rounded-sm p-2 
                          duration-200 ease-in hover:text-btn-text-color hover:shadow-[5px_5px_0px_#000000] hover:translate-x-[-2px]"
          >
            View in GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
