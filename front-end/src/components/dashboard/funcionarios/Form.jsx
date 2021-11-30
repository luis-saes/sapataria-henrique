import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import { useForm, Form } from "../generic/useForm";
import Input from "../generic/Input";
import styles from "../Dashboard.module.css";
import { validate } from "gerador-validador-cpf";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  let temp;

  const validateFields = (fieldValues = values) => {
    temp = { ...errors };

    temp.cpf = validate(values.cpf) ? "" : "CPF inválido";
    temp.nome =
      values.nome.length < 256 ? "" : "Limite de caracteres (255) ultrapassado";
    temp.salario =
      values.salario && !isNaN(Number(values.salario))
        ? ""
        : "Salario deve ser do tipo número";
    temp.complemento =
      values.complemento.length < 256
        ? ""
        : "Limite de caracteres (255) ultrapassado";
    temp.logradouro =
      values.logradouro.length < 256
        ? ""
        : "Limite de caracteres (255) ultrapassado";
    temp.cidade =
      values.cidade.length < 256
        ? ""
        : "Limite de caracteres (255) ultrapassado";
    temp.estado =
      values.estado.length === 2 ? "" : "Estado deve ter 2 caracteres";
    temp.numero =
      values.numero && !isNaN(Number(values.numero))
        ? ""
        : "Numero deve ser do tipo número";
    temp.bairro =
      values.bairro.length < 256
        ? ""
        : "Limite de caracteres (255) ultrapassado";

    temp.cpf = values.cpf
      ? temp.cpf
      : "Campo obrigatório, não pode estar vazio";
    temp.nome = values.nome
      ? temp.nome
      : "Campo obrigatório, não pode estar vazio";
    temp.complemento = values.complemento
      ? temp.complemento
      : "Campo obrigatório, não pode estar vazio";
    temp.logradouro = values.logradouro
      ? temp.logradouro
      : "Campo obrigatório, não pode estar vazio";
    temp.cidade = values.cidade
      ? temp.cidade
      : "Campo obrigatório, não pode estar vazio";
    temp.estado = values.estado
      ? temp.estado
      : "Campo obrigatório, não pode estar vazio";
    temp.bairro = values.bairro
      ? temp.bairro
      : "Campo obrigatório, não pode estar vazio";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);
  const [modalText, setModalText] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (validateFields()) {
      const tempData = new Date(values.Data);
      values.Data = `${tempData.getFullYear()}-${
        tempData.getMonth() + 1
      }-${tempData.getDate()}`;

      (async () => {
        const rawResponse = await fetch("http://localhost:3001/funcionarios", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const content = await rawResponse.json();
        setOpen(true);
        setModalText(content.error.message);
      })();
    } else {
      console.log("Deu ruim!");
    }
  };

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Erro na inserção.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Descrição: ${modalText}`}
          </Typography>
        </Box>
      </Modal>
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
