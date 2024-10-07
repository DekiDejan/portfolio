import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-[#3A4231]">
    <div className={styles.loader}></div>
  </div>
);

export default Loader;
