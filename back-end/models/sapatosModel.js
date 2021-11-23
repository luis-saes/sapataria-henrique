const db = require("../utils/database");

module.exports = class Vendas {
  constructor(
    referencia,
    precoVenda,
    nome,
    descricao,
    marca,
    tamanho,
    quantidadeEstoque
  ) {
    this.referencia = referencia;
    this.PrecoVenda = precoVenda;
    this.nome = nome;
    this.descricao = descricao;
    this.marca = marca;
    this.tamanho = tamanho;
    this.quantidadeEstoque = quantidadeEstoque;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM produto");
  }

  static insertElement(
    referencia,
    precoVenda,
    nome,
    descricao,
    marca,
    tamanho,
    quantidadeEstoque
  ) {
    return db.execute(
      `INSERT INTO produto (Referencia, PrecoVenda, Nome, Descricao, Marca, Tamanho, QuantidadeEstoque) VALUES (${referencia}, ${precoVenda}, '${nome}', '${descricao}', '${marca}', ${tamanho}, '${quantidadeEstoque}')`
    );
  }

  static removeElement(referencia) {
    return db.execute(`DELETE FROM venda WHERE referencia = '${referencia}'`);
  }
};
