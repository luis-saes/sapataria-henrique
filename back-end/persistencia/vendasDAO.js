const db = require("../utils/database");
const fieldValidation = require("../utils/validation");
const vendasModel = require("../models/vendasModel");

module.exports = class VendasDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM venda");
  }

  static insertElement(jsonObj) {
    // jsonObj.precoTotal = vendasModel.changeToPrecision2(
    //   Number(jsonObj.precoTotal)
    // );
    // if (!fieldValidation.vendasValidation(jsonObj)) {
    //   console.log("Falou na inserção, poxa...");
    //   return false;
    // }
    // console.log("Deu bom na inserção!!!!");
    // console.log(
    //   db.execute(`SELECT * FROM cliente WHERE CPF = '${jsonObj.cpfCliente}'`)
    // );
    // console.log(
    //   db.execute(
    //     `SELECT * FROM funcionario WHERE CPF = '${jsonObj.cpfFuncionario}'`
    //   )
    // );
    return db.execute(
      `INSERT INTO venda (ID, Situacao, Data, FormaPagamento, PrecoTotal, CPFFuncionario, CPFCliente) VALUES (${jsonObj.id}, '${jsonObj.situacao}', '${jsonObj.data}', '${jsonObj.formaPagamento}', ${jsonObj.precoTotal}, '${jsonObj.cpfFuncionario}', '${jsonObj.cpfCliente}')`
    );
  }

  static updateElement(jsonObj) {
    // jsonObj.precoTotal = vendasModel.changeToPrecision2(
    //   Number(jsonObj.precoTotal)
    // );
    // console.log(
    //   db.execute(`SELECT * FROM cliente WHERE CPF = '${jsonObj.cpfCliente}'`)
    // );
    // console.log(
    //   db.execute(
    //     `SELECT * FROM funcionario WHERE CPF = '${jsonObj.cpfFuncionario}'`
    //   )
    // );
    return db.execute(
      `UPDATE venda SET Situacao = '${jsonObj.Situacao}', Data = '${jsonObj.Data}', FormaPagamento = '${jsonObj.FormaPagamento}', PrecoTotal = ${jsonObj.PrecoTotal}, CPFFuncionario = '${jsonObj.CPFFuncionario}', CPFCliente = '${jsonObj.CPFCliente}' WHERE ID = '${jsonObj.ID}'`
    );
  }

  static removeElement(jsonObj) {
    console.log("removeElement", jsonObj);
    return db.execute(`DELETE FROM venda WHERE id = ${jsonObj.ID}`);
  }
};
