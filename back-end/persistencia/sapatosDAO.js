const db = require("../utils/database");
const fieldValidation = require("../utils/validation");
const sapatosModel = require("../models/sapatosModel");

module.exports = class SapatosDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM produto");
  }

  static insertElement(jsonObj) {
    jsonObj.salario = sapatosModel.changeToPrecision2(Number(jsonObj.salario));
    if (!fieldValidation.sapatosValidation(jsonObj)) {
      console.log("Falou na inserção, poxa...");
      return false;
    }
    console.log("Deu bom na inserção!!!!");
    return db.execute(
      `INSERT INTO produto (Referencia, PrecoVenda, Nome, Descricao, Marca, Tamanho, QuantidadeEstoque) VALUES ('${jsonObj.referencia}', ${jsonObj.precoVenda}, '${jsonObj.nome}', '${jsonObj.descricao}', ${jsonObj.tamanho}, ${jsonObj.quantidadeEstoque})`
    );
  }

  static updateElement(jsonObj) {
    jsonObj.Salario = sapatosModel.changeToPrecision2(Number(jsonObj.Salario));
    console.log(jsonObj.CPF);
    return db.execute(
      `UPDATE produto SET Referencia = '${jsonObj.Referencia}', PrecoVenda = ${jsonObj.PrecoVenda}, Nome = '${jsonObj.Nome}', Descricao = '${jsonObj.Descricao}', Tamanho = ${jsonObj.Tamanho}, QuantidadeEstoque = ${jsonObj.QuantidadeEstoque} WHERE Referencia = '${jsonObj.Referencia}'`
    );
  }

  static removeElement(jsonObj) {
    console.log("removeElement", jsonObj);
    return db.execute(
      `DELETE FROM produto WHERE Refencia = '${jsonObj.referencia}'`
    );
  }
};
