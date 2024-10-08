import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#3A4231]">
    <div className={styles.loader}></div>
    <p className="text-4xl font-['Caveat'] text-[#628340] mt-8">Loading...</p>
  </div>
);

export default Loader;
