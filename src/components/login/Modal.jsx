import React from "react";
import Form from "react-bootstrap/Form";
import Field from "./Field";
import LoginButton from "./LoginButton";
import styles from "./Modal.module.css";

const Modal = () => {
  const logarClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.modal}>
      <Form>
        <Field
          name="Email"
          type="email"
          placeholder="Digite seu e-mail"
          muted="Seu e-mail jamais será compartilhado com terceiros."
        />
        <Field name="Senha" type="password" placeholder="Digite sua senha" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoginButton
            onChange="logarClickHandler"
            message="Logar"
            onClick={logarClickHandler}
          />
        </div>
      </Form>
    </div>
  );
};

export default Modal;
