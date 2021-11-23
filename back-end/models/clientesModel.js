const db = require("../utils/database");

module.exports = class Clientes {
  constructor(cpf, nome, telefone) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM cliente");
  }

  static insertElement(cpf, nome, telefone) {
    return db.execute(
      `INSERT INTO cliente (CPF, Nome, Telefone) VALUES ('${cpf}', '${nome}', '${telefone}')`
    );
  }

  static removeElement(cpf) {
    db.execute(`DELETE FROM venda WHERE cpfcliente = '${cpf}'`);
    return db.execute(`DELETE FROM cliente WHERE cpf = '${cpf}'`);
  }
};
