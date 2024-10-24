import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import countriesImage from "../assets/countries-ss.png";
import formImage from "../assets/form-ss.png";

import htmlIcon from "../assets/icons/technologies/html.png";
import figmaIcon from "../assets/icons/technologies/figma.png";
import cssIcon from "../assets/icons/technologies/css.png";
import javascriptIcon from "../assets/icons/technologies/js.png";
import tailwindIcon from "../assets/icons/technologies/tailwind-css.png";
import reactIcon from "../assets/icons/technologies/react.png";
import reduxIcon from "../assets/icons/technologies/redux.png";
import typescriptIcon from "../assets/icons/technologies/typescript.png";
import nextIcon from "../assets/icons/technologies/nextjs-icon-svgrepo-com.svg";
import gitIcon from "../assets/icons/technologies/git.png";
import githubIcon from "../assets/icons/technologies/github.png";

const Projects: React.FC = () => {
  return (
    <>
      <div className="bg-white w-full">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#628340]"></div>
        <h3 className="text-center text-3xl lg:text-4xl xl:text-5xl text-[#628340] font-bold py-6 sm:py-12">
          MY PROJECTS
        </h3>
        <div className="mx-auto w-11/12 sm:w-3/4 lg:w-2/3">
          <Swiper
            effect={"cube"}
            loop={true}
            speed={1500}
            modules={[Navigation, EffectCube, Autoplay]}
            navigation
            grabCursor
            slidesPerView={1}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 30,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dekidejan.github.io/REST-Countries-API-with-color-theme-switcher---FrontEndMentor-Challenge/"
              >
                <img src={countriesImage} alt="Countries screenshot image" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dekidejan.github.io/Multi-Step-Form/"
              >
                <img src={formImage} alt="Multi step form screenshot image" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
        <h3 className="text-center text-3xl lg:text-4xl xl:text-5xl text-[#628340] font-bold pt-12 pb-6 sm:pb-12">
          SKILLS
        </h3>
        <div className="mx-auto w-2/3 flex flex-wrap justify-center gap-4 pb-12 sm:pb-24">
          <img
            src={figmaIcon}
            alt="Figma icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="Figma"
          />
          <img
            src={htmlIcon}
            alt="HTML icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="HTML"
          />
          <img
            src={cssIcon}
            alt="CSS icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="CSS"
          />
          <img
            src={javascriptIcon}
            alt="JavaScript icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="JavaScript"
          />
          <img
            src={tailwindIcon}
            alt="TailwindCSS icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="TailwindCSS"
          />
          <img
            src={reactIcon}
            alt="React icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="ReactJS"
          />
          <img
            src={reduxIcon}
            alt="Redux icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="Redux"
          />
          <img
            src={typescriptIcon}
            alt="TypeScript icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="TypeScript"
          />
          <img
            src={nextIcon}
            alt="NextJS icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="Next.js"
          />
          <img
            src={gitIcon}
            alt="Git icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="Git"
          />
          <img
            src={githubIcon}
            alt="GitHub icon"
            width={80}
            className="hover:scale-125 duration-200"
            title="GitHub"
          />
        </div>
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-[#628340]"></div>
      </div>
    </>
  );
};

export default Projects;
