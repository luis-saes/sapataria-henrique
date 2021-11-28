import React from "react";
import Modal from "./components/login/Modal";
import Dashboard from "./components/dashboard/Dashboard";
import Funcionarios from "./components/dashboard/funcionarios/Funcionarios";
import Form from "./components/dashboard/funcionarios/Form";
import Clientes from "./components/dashboard/clientes/Clientes";
import Sapatos from "./components/dashboard/sapatos/Sapatos";
import Vendas from "./components/dashboard/vendas/Vendas";
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
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/funcionarios/adicionar" element={<Form />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/sapatos" element={<Sapatos />} />
        <Route path="/vendas" element={<Vendas />} />
      </Routes>
    </div>
  );
}

export default App;
