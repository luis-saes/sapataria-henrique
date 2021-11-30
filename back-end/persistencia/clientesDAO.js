const db = require("../utils/database");
const fieldValidation = require("../utils/validation");

module.exports = class ClientesDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM cliente");
  }

  static insertElement(jsonObj) {
    if (!fieldValidation.clientesValidation(jsonObj)) {
      console.log("Falou na inserção, poxa...");
      return false;
    }
    console.log("Deu bom na inserção!!!!");
    return db.execute(
      `INSERT INTO cliente (CPF, Nome, Telefone) VALUES ('${jsonObj.cpf}', '${jsonObj.nome}', '${jsonObj.telefone}')`
    );
  }

  static updateElement(jsonObj) {
    console.log(jsonObj.CPF);
    return db.execute(
      `UPDATE cliente SET CPF = '${jsonObj.CPF}', Nome = '${jsonObj.Nome}', Telefone = ${jsonObj.Salario} WHERE CPF = '${jsonObj.CPF}'`
    );
  }

  static removeElement(jsonObj) {
    console.log("removeElement", jsonObj);
    db.execute(`DELETE FROM venda WHERE cpfcliente = '${jsonObj.cpf}'`);
    return db.execute(`DELETE FROM cliente WHERE cpf = '${jsonObj.cpf}'`);
  }
};
