import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";

const Funcionarios = () => {
  const funcionariosLink = "http://localhost:3001/funcionarios";

  const [post, setPost] = React.useState(null);
  useEffect(() => {
    fetch(funcionariosLink)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);

  if (!post) return null;

  const mRows = [];
  for (let i = 0; i < 50; ++i) {
    mRows.push({
      id: randomId(),
    });

    Object.keys(post[i]).forEach((key) => {
      mRows[i][key] = post[i][key];
    });
  }

  const columnNames = [
    "Bairro",
    "CPF",
    "Cidade",
    "Complemento",
    "Estado",
    "Logradouro",
    "Nome",
    "Numero",
    "Salario",
  ];

  const mColumns = [
    {
      headerName: "Bairro",
      width: 90,
      editable: true,
    },
    {
      headerName: "CPF",
      width: 180,
      editable: true,
    },
    {
      headerName: "Cidade",
      width: 180,
      editable: true,
    },
    {
      headerName: "Complemento",
      width: 180,
      editable: true,
    },
    {
      headerName: "Estado",
      width: 180,
      editable: true,
    },
    {
      headerName: "Logradouro",
      width: 180,
      editable: true,
    },
    {
      headerName: "Nome",
      editable: true,
    },
    {
      headerName: "Número",
      type: "number",
      editable: true,
    },
    {
      headerName: "Salário",
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
          link={funcionariosLink}
          keyToDelete="CPF"
          columnNames={columnNames}
        />
        <Link to="/funcionarios/adicionar" style={{ textDecoration: "none" }}>
          <button>Koeeeeee</button>
        </Link>
      </div>
    </div>
  );
};

export default Funcionarios;
