import React from "react";
import styles from "./SectionButton.module.css";

const SectionButton = (props) => {
  return (
    <div
      className={`${styles.sectionButton} ${
        props.active ? styles.active : styles.notActive
      }`}
    >
      <div className={styles.logo}>{props.logo}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default SectionButton;
