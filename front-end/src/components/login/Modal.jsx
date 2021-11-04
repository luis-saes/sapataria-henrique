import React from "react";
import Form from "react-bootstrap/Form";
import Field from "./Field";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ setToken }) => {
  return (
    <div className={styles.modal}>
      <Logo />
      <Form>
        <Field
          name="Email"
          type="email"
          placeholder="Digite seu e-mail"
          muted="Seu e-mail jamais será compartilhado com terceiros."
        />
        <Field name="Senha" type="password" placeholder="Digite sua senha" />
        <Link to="/dashboard">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <LoginButton message="Logar" />
          </div>
        </Link>
      </Form>
    </div>
  );
};

export default Modal;
