import React from "react";
import paintScreenshot from "../assets/paint-ss.png";
import pongScreenshot from "../assets/pong-ss.png";
import rightArrow from "../assets/feature right arrow.png";
import leftArrow from "../assets/feature left arrow.png";

const Features: React.FC = () => {
  return (
    <div className="my-24 mx-16 md:mx-24 xl:mx-36">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dekidejan.github.io/paint-replica/"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mb-12 xl:mb-8 hover:scale-105 duration-300">
          <div>
            <h3 className="text-3xl xl:text-4xl text-white opacity-90 font-bold mb-4">
              FEELING CREATIVE?
            </h3>
            <p className="text-lg lg:text-xl font-light text-white opacity-90">
              Use this paint replica and save your creation
            </p>
            <img
              src={rightArrow}
              alt="Right arrow"
              className="ml-auto xl:mt-8 hidden md:block"
            />
          </div>
          <div className="shadow-2xl md:max-w-[50%]">
            <img src={paintScreenshot} alt="Paint Screenshot" width={500} />
          </div>
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dekidejan.github.io/pong-replica/"
      >
        <div className="flex flex-col md:flex-row  justify-between items-center text-center md:text-right cursor-pointer gap-4 hover:scale-105 duration-300">
          <div className="shadow-2xl md:max-w-[50%] order-1 md:order-none">
            <img src={pongScreenshot} alt="Pong Screenshot" width={500} />
          </div>
          <div>
            <h3 className="text-3xl xl:text-4xl text-white opacity-90 font-bold mb-4">
              FEELING COMPETITIVE?
            </h3>
            <p className="text-lg lg:text-xl font-light text-white opacity-90">
              Play this classic game against computer and test your skills
            </p>
            <img
              src={leftArrow}
              alt="Left arrow"
              className="xl:mt-8 hidden md:block"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Features;
