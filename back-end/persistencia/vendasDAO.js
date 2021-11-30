const db = require("../utils/database");
const fieldValidation = require("../utils/validation");
const vendasModel = require("../models/vendasModel");

module.exports = class VendasDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM venda");
  }

  static insertElement(jsonObj) {
    jsonObj.precoTotal = vendasModel.changeToPrecision2(
      Number(jsonObj.precoTotal)
    );
    if (!fieldValidation.vendasValidation(jsonObj)) {
      console.log("Falou na inserção, poxa...");
      return false;
    }
    console.log("Deu bom na inserção!!!!");
    return db.execute(
      `INSERT INTO venda (ID, Situacao, Data, FormaPagamento, PrecoTotal, CPFFuncionario, CPFCliente) VALUES (${id}, '${situacao}', ${data}, '${formaPagamento}', ${precoTotal}, '${CPFFuncionario}', '${CPFCliente}')`
    );
  }

  static updateElement(jsonObj) {
    jsonObj.precoTotal = vendasModel.changeToPrecision2(
      Number(jsonObj.precoTotal)
    );
    return db.execute(
      `UPDATE venda SET ID = ${id}, Situacao = '${situacao}', Data = ${data}, FormaPagamento = '${formaPagamento}', PrecoTotal = ${precoTotal}, CPFFuncionario = '${CPFFuncionario}', CPFCliente ='${CPFCliente} WHERE ID = '${jsonObj.ID}'`
    );
  }

  static removeElement(jsonObj) {
    console.log("removeElement", jsonObj);
    db.execute(`DELETE FROM venda WHERE cpfvenda = '${jsonObj.cpf}'`);
    return db.execute(`DELETE FROM venda WHERE cpf = '${jsonObj.cpf}'`);
  }
};
