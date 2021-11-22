import React from "react";
import Sidebar from "../Sidebar";
import styles from "../Dashboard.module.css";
import MUITable from "../generic/MUITable";

const Vendas = () => {
  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
      <MUITable />
    </div>
  );
};

export default Vendas;
