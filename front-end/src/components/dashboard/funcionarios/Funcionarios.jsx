import React, { useState, useEffect } from "react";

function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    fetch("/funcionarios/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setFuncionarios(jsonResponse.funcionariosList));
  });

  return (
    <div>
      {funcionarios.map((funcionario) => (
        <li>{{ funcionario }}</li>
      ))}
    </div>
  );
}

export default Funcionarios;
