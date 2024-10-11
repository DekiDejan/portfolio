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
      className="h-screen w-full bg-cover bg-[90%] sm:bg-[75%] md:bg-[65%] lg:bg-center animate-fastOpacity"
      style={{ backgroundImage: `url(${desktopBg})` }}
    >
      <div className="flex h-full mx-8 sm:mx-16 md:mx-24 xl:mx-36">
        <div className="sm:basis-2/3 lg:basis-1/2 min-w-[50%] pb-32 sm:pb-0 flex flex-col justify-center h-full text-[#3A4231]">
          <div className="animate-slideFromLeft">
            <h1 className="text-7xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl text-center sm:text-left font-['Caveat'] tracking-[30px] md:tracking-[40px] xl:tracking-[50px] -mr-6">
              DEJAN
            </h1>
            <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold sm:font-bold text-center sm:text-left mt-4 mb-36 sm:mb-24 md:mb-12">
              WEB DEVELOPER
            </h2>
          </div>
          <div className="grow sm:hidden"></div>
          <p className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-white font-light text-center sm:text-left opacity-90 animate-slideFromBottom">
            With a background in design, I bring creativity and technical
            expertise to build intuitive, modern web applications
          </p>
          <a
            href="#contact"
            className="text-white text-lg md:text-xl xl:text-2xl bg-[#3A4231] w-full text-center my-7 py-2 md:py-3 flex justify-center hover:opacity-90 duration-150 animate-slideFromBottom rounded-md z-10"
          >
            <span className="opacity-90 mr-4">CONTACT ME</span>
            <img src={arrowDown} alt="Arrow down icon" className="inline" />
          </a>
          <div className="flex gap-8 mx-auto z-10 order-first sm:order-last py-6 sm:py-0">
            <div className="opacity-0 animate-popUp1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/DekiDejan"
                title="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
            </div>
            <div className="opacity-0 animate-popUp2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dejan-mironski-panchevski/"
                title="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn icon" />
              </a>
            </div>
            <div className="opacity-0 animate-popUp3">
              <a
                href={cvFile}
                download="CV - Dejan Mironski Panchevski"
                title="Download CV"
              >
                <img src={cvIcon} alt="CV icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-0 w-full h-[15%] bg-gradient-to-b from-transparent to-[#628340]"></div>
    </div>
  );
};

export default Hero;
