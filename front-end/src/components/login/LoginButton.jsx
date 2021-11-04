import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./LoginButton.module.css";

const LoginButton = (props) => {
  return (
    <div>
      <Button className={styles.loginButton} type="submit">
        {props.message}
      </Button>
    </div>
  );
};

export default LoginButton;
