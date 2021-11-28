import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Sidebar from "../Sidebar";
import { useForm, Form } from "../generic/useForm";
import Input from "../generic/Input";
import styles from "../Dashboard.module.css";
import { validate } from "gerador-validador-cpf";

const initialFValues = {
  cpf: "",
  nome: "",
  salario: 0.0,
  complemento: "",
  logradouro: "",
  cidade: "",
  estado: "",
  numero: 0,
  bairro: "",
};

const Funcionarios = () => {
  //   let values = {
  //     cpf: "02608823726",
  //     nome: "Keane Andrew",
  //     salario: 4482.66,
  //     complemento: "costume",
  //     logradouro: "precede",
  //     cidade: "slacnard",
  //     estado: "SP",
  //     numero: 2,
  //     bairro: "adliarvertiang",
  //   };

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState("");
  const [complemento, setComplemento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");

  const validateFields = (fieldValues = values) => {
    let temp = { ...errors };
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
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(validateFields());
  };

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <Form onSubmit={submitHandler}>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            name="cpf"
            label="CPF"
            value={values.cpf}
            onChange={handleInputChange}
            error={errors.cpf}
          />
          <Input
            name="nome"
            label="Nome"
            value={values.nome}
            onChange={handleInputChange}
            error={errors.nome}
          />
          <Input
            name="salario"
            label="Salario"
            value={values.salario}
            onChange={handleInputChange}
            error={errors.salario}
          />
          <Input
            name="complemento"
            label="Complemento"
            value={values.complemento}
            onChange={handleInputChange}
            error={errors.complemento}
          />
          <Input
            name="logradouro"
            label="Logradouro"
            value={values.logradouro}
            onChange={handleInputChange}
            error={errors.logradouro}
          />
          <Input
            name="cidade"
            label="Cidade"
            value={values.cidade}
            onChange={handleInputChange}
            error={errors.cidade}
          />
          <Input
            name="estado"
            label="Estado"
            value={values.estado}
            onChange={handleInputChange}
            error={errors.estado}
          />
          <Input
            name="numero"
            label="Número"
            value={values.numero}
            onChange={handleInputChange}
            error={errors.numero}
          />
          <Input
            name="bairro"
            label="Bairro"
            value={values.bairro}
            onChange={handleInputChange}
            error={errors.bairro}
          />
          {/* <Link to="/funcionarios" style={{ textDecoration: "none" }}> */}
          <Button type="submit" variant="outlined" onSubmit={submitHandler}>
            Adicionar Novo Funcionário
          </Button>
          {/* </Link> */}
        </Box>
      </Form>
    </div>
  );
};

export default Funcionarios;
