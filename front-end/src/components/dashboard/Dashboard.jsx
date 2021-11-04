import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.flexStart}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
