import React from "react";
import mainLogo from "../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={mainLogo} className={styles.logo} alt="Logo Henrique" />
    </div>
  );
};

export default Logo;
