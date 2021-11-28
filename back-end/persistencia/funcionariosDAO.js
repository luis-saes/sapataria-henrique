const db = require("../utils/database");

module.exports = class FuncionariosDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM funcionario");
  }

  static insertElement(
    cpf,
    nome,
    salario,
    complemento,
    logradouro,
    cidade,
    estado,
    numero,
    bairro
  ) {
    return db.execute(
      `INSERT INTO funcionario (CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro) VALUES ('${cpf}', '${nome}', ${salario}, '${complemento}', '${logradouro}', '${cidade}', '${estado}', ${numero}, '${bairro}')`
    );
  }

  static updateElement(
    cpf,
    nome,
    salario,
    complemento,
    logradouro,
    cidade,
    estado,
    numero,
    bairro
  ) {
    return db.execute(
      `UPDATE CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro FROM funcionario WHERE CPF = '${cpf}'``INSERT INTO funcionario (CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro) VALUES ('${cpf}', '${nome}', ${salario}, '${complemento}', '${logradouro}', '${cidade}', '${estado}', ${numero}, '${bairro}')`
    );
  }

  static removeElement(cpf) {
    db.execute(`DELETE FROM venda WHERE cpffuncionario = '${cpf}'`);
    return db.execute(`DELETE FROM funcionario WHERE cpf = '${cpf}'`);
  }
};
