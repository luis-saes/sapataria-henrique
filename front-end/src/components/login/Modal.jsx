import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "./Logo";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ setToken }) => {
  const loginLink = "http://localhost:3001/login";

  const [post, setPost] = useState(null);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  const setLoginHandler = (event) => {
    console.log(event.target.value);
    setLogin(event.target.value);
  };

  const setSenhaHandler = (event) => {
    console.log(event.target.value);
    setSenha(event.target.value);
  };

  const setLogadoHandler = () => {
    const lp = {};
    lp.user = login;
    lp.senha = senha;
    console.log(lp);
    (async () => {
      const rawResponse = await fetch(loginLink, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lp),
      });
      const content = await rawResponse.json();
      // console.log(content);
    })();
  };

  return (
    <div className={styles.modal}>
      <Logo />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            onChange={setLoginHandler}
          />
          <Form.Text className="text-muted">
            Seu e-mail jamais será compartilhado com terceiros.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            onChange={setSenhaHandler}
          />
        </Form.Group>
        <Link to="/dashboard">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className={styles.loginButton}
              type="submit"
              onClick={setLogadoHandler}
            >
              Logar
            </Button>
          </div>
        </Link>
      </Form>
    </div>
  );
};

export default Modal;
