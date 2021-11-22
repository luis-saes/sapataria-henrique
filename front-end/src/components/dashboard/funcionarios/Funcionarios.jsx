import React from "react";
import Sidebar from "../Dashboard";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";

const Funcionarios = () => {
  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <MUITable />
    </div>
  );
};

export default Funcionarios;
