import React from "react";
import desktopBg from "../assets/desktop bg.png";
import arrowDown from "../assets/icons/down-arrow 1.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import cvIcon from "../assets/icons/cv.svg";
import cvFile from "../assets/CV - Dejan Mironski Panchevski.pdf";

const Hero: React.FC = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${desktopBg})` }}
    >
      <div className="flex h-full mx-36">
        <div className="basis-1/2 flex flex-col items-center justify-center h-full text-[#3A4231]">
          <div className="animate-slideFromLeft">
            <h1 className="text-9xl font-['Caveat'] tracking-[50px] -mr-6">
              DEJAN
            </h1>
            <h2 className="text-7xl font-bold mt-4 mb-12">WEB DEVELOPER</h2>
          </div>
          <p className="text-xl text-white font-light opacity-90 animate-slideFromBottom">
            With a background in design, I bring creativity and technical
            expertise to build intuitive, modern web applications
          </p>
          <a
            href="#"
            className="text-white text-2xl bg-[#3A4231] w-full text-center my-7 py-3 flex justify-center hover:opacity-90 duration-150 animate-slideFromBottom"
          >
            <span className="opacity-90 mr-4">CONTACT ME</span>
            <img src={arrowDown} alt="Arrow down icon" className="inline" />
          </a>
          <div className="flex gap-8">
            <div className="opacity-0 animate-popUp1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/DekiDejan"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
            </div>
            <div className="opacity-0 animate-popUp2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dejan-mironski-panchevski/"
              >
                <img src={linkedinIcon} alt="LinkedIn icon" />
              </a>
            </div>
            <div className="opacity-0 animate-popUp3">
              <a href={cvFile} download="CV - Dejan Mironski Panchevski">
                <img src={cvIcon} alt="CV icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[15%] bg-gradient-to-b from-transparent to-[#628340]"></div>
    </div>
  );
};

export default Hero;
