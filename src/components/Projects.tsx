import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import countriesImage from "../assets/countries-ss.png";
import formImage from "../assets/form-ss.png";

const Projects = () => {
  return (
    <>
      <div className="bg-white w-full">
        <div className="w-full h-20 bg-gradient-to-t from-transparent to-[#628340]"></div>
        <h3 className="text-center text-5xl text-[#628340] font-bold pt-24 pb-12">
          MY PROJECTS
        </h3>
        <div className="mx-auto w-2/3">
          <Swiper
            effect={"cube"}
            loop={true}
            modules={[Navigation, EffectCube, Autoplay]}
            navigation
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
        <h3 className="text-center text-5xl text-[#628340] font-bold pt-12 pb-12">
          SKILLS
        </h3>
      </div>
    </>
  );
};

export default Projects;
