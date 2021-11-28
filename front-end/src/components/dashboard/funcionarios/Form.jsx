import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import { validate } from "gerador-validador-cpf";

const Funcionarios = () => {
  let values = {
    cpf: "02608823726",
    nome: "Keane Andrew",
    salario: 4482.66,
    complemento: "costume",
    logradouro: "precede",
    cidade: "slacnard",
    estado: "SP",
    numero: 2,
    bairro: "adliarvertiang",
  };

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState("");
  const [complemento, setComplemento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");

  const validateFields = () => {
    let temp = {};
    temp.cpf = validate(values.cpf) ? "" : "Campo obrigatório";
    temp.nome = values.nome.length < 256 ? "" : "Campo obrigatório";
    temp.salario = !isNaN(values.salario) ? "" : "Campo obrigatório";
    temp.complemento =
      values.complemento && values.complemento < 256 ? "" : "Campo obrigatório";
    temp.logradouro =
      values.logradouro && values.logradouro < 256 ? "" : "Campo obrigatório";
    temp.cidade =
      values.cidade && values.cidade.length < 256 ? "" : "Campo obrigatório";
    temp.estado =
      values.estado && values.estado.length === 2 ? "" : "Campo obrigatório";
    temp.numero = !isNaN(values.numero) ? "" : "Campo obrigatório";
    temp.bairro =
      values.bairro && values.bairro.legngth < 256 ? "" : "Campo obrigatório";

    return Object.values(temp).every((x) => x === "");
  };
  validateFields();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(validateFields());
  };

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={submitHandler}>
          <TextField
            id="standard-basic"
            label="CPF"
            variant="standard"
            value={cpf}
            onInput={(e) => setCpf(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            value={nome}
            onInput={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*.[0-9][0-9]" }}
            id="standard-basic"
            label="Salario"
            variant="standard"
            helperText="Salários devem estar com duas casas decimais no final, ex: 1000.00"
            value={salario}
            onInput={(e) => setSalario(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Complemento"
            variant="standard"
            value={complemento}
            onInput={(e) => setComplemento(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Logradouro"
            variant="standard"
            value={logradouro}
            onInput={(e) => setLogradouro(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Cidade"
            variant="standard"
            value={cidade}
            onInput={(e) => setCidade(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Estado"
            variant="standard"
            value={estado}
            onInput={(e) => setEstado(e.target.value)}
            required
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="standard-basic"
            label="Numero"
            variant="standard"
            value={numero}
            onInput={(e) => setNumero(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Bairro"
            variant="standard"
            value={bairro}
            onInput={(e) => setBairro(e.target.value)}
            required
          />
          {/* <Link to="/funcionarios" style={{ textDecoration: "none" }}> */}
          <Button type="submit" variant="outlined" onSubmit={submitHandler}>
            Adicionar Novo Funcionário
          </Button>
          {/* </Link> */}
        </form>
      </Box>
    </div>
  );
};

export default Funcionarios;
