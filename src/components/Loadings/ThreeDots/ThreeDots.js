import React from "react";
import styles from "./ThreeDots.module.css";

const ThreeDots = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default ThreeDots;
