import React from "react";
import styles from "./Loader.module.css";
import bgImage from "../assets/bg image.png";

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#3A4231]">
    <img src={bgImage} alt="Background image" className="hidden" />
    <div className={styles.loader}></div>
    <p className="text-4xl font-['Caveat'] text-[#628340] mt-8">Loading...</p>
  </div>
);

export default Loader;
