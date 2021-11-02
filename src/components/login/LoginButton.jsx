import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./LoginButton.module.css";

const LoginButton = (props) => {
  const clickHandler = (event) => {
    props.onClick(event);
  };

  return (
    <div>
      <Button
        onClick={clickHandler}
        className={styles.loginButton}
        type="submit"
      >
        {props.message}
      </Button>
    </div>
  );
};

export default LoginButton;
