import React from "react";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
// import MUITable from "../generic/MUITable";
import { randomId } from "@mui/x-data-grid-generator";
import axios from "axios";

// const componentDidMount = () => {
//   axios.get("/funcionarios").then(function (response) {
//     console.log(response.data);
//   });
// };

const Funcionarios = () => {
  // componentDidMount();
  return null;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/funcionarios").then((response) => {
      setPost(response.data);
    });
  });

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

  // const mColumns = [
  //   {
  //     field: "ID",
  //     headerName: "ID",
  //     width: 90,
  //     editable: true,
  //   },
  //   {
  //     field: "CPFCliente",
  //     headerName: "CPF Cliente",
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: "CPFFuncionario",
  //     headerName: "CPF Funcionario",
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: "Data",
  //     headerName: "Data",
  //     type: "date",
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: "FormaPagamento",
  //     headerName: "Forma de Pagamento",
  //     type: "string",
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: "PrecoTotal",
  //     headerName: "Preço Total",
  //     type: "string",
  //     width: 180,
  //     editable: true,
  //   },
  //   {
  //     field: "Situacao",
  //     headerName: "Situação",
  //     type: "string",
  //     editable: true,
  //   },
  // ];

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      {/* <MUITable rows={mRows} columns={mColumns} /> */}
    </div>
  );
};

export default Funcionarios;
