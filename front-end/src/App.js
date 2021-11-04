import React, { useState } from "react";
import Modal from "./components/login/Modal";
import Dashboard from "./components/dashboard/Dashboard";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return (
  //     <div className={`App ${styles.app}`}>
  //       <Modal setToken={setToken} />
  //     </div>
  //   );
  // }

  return (
    <div className={`App ${styles.app}`}>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="/login" element={<Modal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
