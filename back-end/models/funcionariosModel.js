const db = require("../utils/database");

module.exports = class Funcionarios {
  constructor(
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
    this.cpf = cpf;
    this.nome = nome;
    this.salario = salario;
    this.complemento = complemento;
    this.logradouro = logradouro;
    this.cidade = cidade;
    this.estado = estado;
    this.numero = numero;
    this.bairro = bairro;
  }

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

  static removeElement(cpf) {
    db.execute(`DELETE FROM venda WHERE cpffuncionario = '${cpf}'`);
    return db.execute(`DELETE FROM funcionario WHERE cpf = '${cpf}'`);
  }
};
