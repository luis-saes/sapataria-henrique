const db = require("../utils/database");

module.exports = class Funcionarios {
  constructor(cpf, nome, telefone) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM funcionario");
  }
};
