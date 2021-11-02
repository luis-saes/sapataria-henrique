import React from "react";
import Modal from "./components/login/Modal";
import styles from "./App.module.css";

function App() {
  return (
    <div className={`App ${styles.app}`}>
      <Modal />
    </div>
  );
}

export default App;
