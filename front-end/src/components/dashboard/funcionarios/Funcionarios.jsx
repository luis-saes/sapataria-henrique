import React from "react";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";
import axios from "axios";

const componentDidMount = () => {
  axios.get("/funcionarios").then(function (response) {
    console.log(response.data.temp_c);
  });
};

const Funcionarios = () => {
  componentDidMount();

  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <MUITable />
    </div>
  );
};

export default Funcionarios;
