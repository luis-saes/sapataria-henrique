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
  id: 0,
  situacao: "",
  data: new Date().getDate(),
  formaPagamento: "",
  precoTotal: "",
  cpfFuncionario: "",
  cpfCliente: "",
};

const FormVendas = () => {
  let temp;

  const validateFields = (fieldValues = values) => {
    // return true;
    temp = { ...errors };

    temp.id = !isNaN(Number(values.id)) ? "" : "ID deve ser do tipo número";
    temp.situacao =
      values.situacao && values.situacao.length < 2
        ? ""
        : "Limite de caracteres (255) ultrapassado";
    temp.data = values.data ? "" : "Campo obrigatório";
    temp.formaPagamento =
      values.formaPagamento && values.formaPagamento.length === 2
        ? ""
        : "Limite de caracteres (2) ultrapassado";
    temp.precoTotal =
      values.precoTotal && !isNaN(Number(values.precoTotal))
        ? ""
        : "Preço Total deve ser do tipo número";
    temp.cpfFuncionario =
      values.cpfFuncionario && validate(values.cpfFuncionario)
        ? ""
        : "CPF inválido";
    temp.cpfCliente =
      values.cpfCliente && validate(values.cpfCliente) ? "" : "CPF inválido";

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

    values.id = Number(values.id);
    if (validateFields()) {
      console.log(values);
      (async () => {
        const rawResponse = await fetch("http://localhost:3001/vendas", {
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
            name="id"
            label="ID"
            value={values.id}
            onChange={handleInputChange}
            error={errors.id}
            typeProps="number"
          />
          <Input
            name="situacao"
            label="Situação"
            value={values.situacao}
            onChange={handleInputChange}
            error={errors.situacao}
          />
          <Input
            name="data"
            label="Data"
            value={values.data}
            onChange={handleInputChange}
            error={errors.data}
            typeProps="date"
          />
          <Input
            name="formaPagamento"
            label="Forma de Pagamento"
            value={values.formaPagamento}
            onChange={handleInputChange}
            error={errors.formaPagamento}
          />
          <Input
            name="precoTotal"
            label="Preço Total"
            value={values.precoTotal}
            onChange={handleInputChange}
            error={errors.precoTotal}
          />
          <Input
            name="cpfFuncionario"
            label="CPF Funcionário"
            value={values.cpfFuncionario}
            onChange={handleInputChange}
            error={errors.cpfFuncionario}
          />
          <Input
            name="cpfCliente"
            label="CPF Cliente"
            value={values.cpfCliente}
            onChange={handleInputChange}
            error={errors.cpfCliente}
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

export default FormVendas;
