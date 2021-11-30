import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import Button from "@mui/material/Button";
import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";

const Vendas = () => {
  const vendasLink = "http://localhost:3001/vendas";

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(vendasLink)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);

  if (!post) return null;

  const mRows = [];
  for (let i = 0; i < post.length; ++i) {
    mRows.push({
      id: randomId(),
    });

    Object.keys(post[i]).forEach((key) => {
      mRows[i][key] = post[i][key];
    });
  }
  console.log(mRows);

  const columnNames = [
    "ID",
    "Situacao",
    "Data",
    "FormaPagamento",
    "PrecoTotal",
    "CPFFuncionario",
    "CPFCliente",
  ];

  const mColumns = [
    {
      headerName: "ID",
      type: "number",
      width: 90,
      editable: false,
    },
    {
      headerName: "Situação",
      width: 180,
      editable: true,
    },
    {
      headerName: "Data",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      headerName: "Forma de Pagamento",
      width: 300,
      editable: true,
    },
    {
      headerName: "Preço Total",
      type: "number",
      width: 180,
      editable: true,
    },
    {
      headerName: "CPF Funcionário",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      headerName: "CPF Cliente",
      type: "string",
      width: 180,
      editable: true,
    },
  ];

  mColumns.forEach((element, index) => {
    element.field = columnNames[index];
  });

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <MUITable
          rows={mRows}
          columns={mColumns}
          link={vendasLink}
          keyToDelete="ID"
          columnNames={columnNames}
        />
        <Link to="/vendas/adicionar" style={{ textDecoration: "none" }}>
          <Button type="submit" variant="outlined">
            Adicionar Nova Venda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Vendas;
