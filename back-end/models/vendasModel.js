const db = require("../utils/database");

module.exports = class Vendas {
  constructor(
    id,
    situacao,
    data,
    formaPagamento,
    precoTotal,
    CPFFuncionario,
    CPFCliente
  ) {
    this.id = id;
    this.situacao = situacao;
    this.data = data;
    this.formaPagamento = formaPagamento;
    this.precoTotal = precoTotal;
    this.CPFFuncionario = CPFFuncionario;
    this.CPFCliente = CPFCliente;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM venda");
  }

  static insertElement(
    id,
    situacao,
    data,
    formaPagamento,
    precoTotal,
    CPFFuncionario,
    CPFCliente
  ) {
    return db.execute(
      `INSERT INTO venda (ID, Situacao, Data, FormaPagamento, PrecoTotal, CPFFuncionario, CPFCliente) VALUES (${id}, '${situacao}', ${data}, '${formaPagamento}', ${precoTotal}, '${cpfFuncionario}', '${cpfCliente}')`
    );
  }

  static removeElement(id) {
    return db.execute(`DELETE FROM venda WHERE id = ${id}`);
  }
};
