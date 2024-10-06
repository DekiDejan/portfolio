import React from "react";
import paintScreenshot from "../assets/paint-ss.png";
import pongScreenshot from "../assets/pong-ss.png";
import rightArrow from "../assets/feature right arrow.png";
import leftArrow from "../assets/feature left arrow.png";

const Features: React.FC = () => {
  return (
    <div className="my-24 mx-36">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dekidejan.github.io/paint-replica/"
      >
        <div className="flex justify-between items-center mb-8 hover:scale-105 duration-300">
          <div>
            <h3 className="text-5xl text-white opacity-90 font-bold mb-4">
              FEELING CREATIVE
            </h3>
            <p className="text-xl font-light text-white opacity-90">
              Use this paint replica and save your creation
            </p>
            <img src={rightArrow} alt="Right arrow" className="ml-auto" />
          </div>
          <div className="shadow-2xl">
            <img src={paintScreenshot} alt="Paint Screenshot" width={500} />
          </div>
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dekidejan.github.io/pong-replica/"
      >
        <div className="flex justify-between items-center text-right cursor-pointer hover:scale-105 duration-300">
          <div className="shadow-2xl">
            <img src={pongScreenshot} alt="Pong Screenshot" width={500} />
          </div>
          <div>
            <h3 className="text-5xl text-white opacity-90 font-bold mb-4">
              FEELING COMPETITIVE
            </h3>
            <p className="text-xl font-light text-white opacity-90">
              Play this classic game against computer and test your skills
            </p>
            <img src={leftArrow} alt="Left arrow" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Features;
