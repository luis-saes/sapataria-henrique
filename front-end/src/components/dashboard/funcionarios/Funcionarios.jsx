import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";

// const componentDidMount = () => {
//   axios.get("/funcionarios").then(function (response) {
//     console.log(response.data);
//   });
// };

const Funcionarios = () => {
  // componentDidMount();
  // return null;
  const [post, setPost] = React.useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/funcionarios")
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

  console.log(mRows);

  const mColumns = [
    {
      field: "Bairro",
      headerName: "Bairro",
      width: 90,
      editable: true,
    },
    {
      field: "CPF",
      headerName: "CPF",
      width: 180,
      editable: true,
    },
    {
      field: "Cidade",
      headerName: "Cidade",
      width: 180,
      editable: true,
    },
    {
      field: "Complemento",
      headerName: "Complemento",
      width: 180,
      editable: true,
    },
    {
      field: "Estado",
      headerName: "Estado",
      width: 180,
      editable: true,
    },
    {
      field: "Logradouro",
      headerName: "Logradouro",
      width: 180,
      editable: true,
    },
    {
      field: "Nome",
      headerName: "Nome",
      editable: true,
    },
    {
      field: "Numero",
      headerName: "Número",
      type: "number",
      editable: true,
    },
    {
      field: "Salario",
      headerName: "Salário",
      editable: true,
    },
  ];

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <MUITable rows={mRows} columns={mColumns} />
        <Link to="/funcionarios/adicionar" style={{ textDecoration: "none" }}>
          <button>Koeeeeee</button>
        </Link>
      </div>
    </div>
  );
};

export default Funcionarios;
