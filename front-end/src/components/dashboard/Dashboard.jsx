import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardOther}>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
