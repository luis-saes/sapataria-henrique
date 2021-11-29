const db = require("../utils/database");
const fieldValidation = require("../utils/validation");

module.exports = class FuncionariosDAO {
  static fetchAll() {
    return db.execute("SELECT * FROM funcionario");
  }

  static insertElement(jsonObj) {
    if (!fieldValidation.funcionariosValidation(jsonObj)) {
      console.log("Falou na inserção, poxa...");
      return false;
    }
    console.log("Deu bom na inserção!!!!");
    return db.execute(
      `INSERT INTO funcionario (CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro) VALUES ('${jsonObj.cpf}', '${jsonObj.nome}', ${jsonObj.salario}, '${jsonObj.complemento}', '${jsonObj.logradouro}', '${jsonObj.cidade}', '${jsonObj.estado}', ${jsonObj.numero}, '${jsonObj.bairro}')`
    );
  }

  static updateElement(jsonObj) {
    console.log(jsonObj.CPF);
    return db.execute(
      `UPDATE funcionario SET CPF = '${jsonObj.CPF}', Nome = '${jsonObj.Nome}', Salario = ${jsonObj.Salario}, Complemento = '${jsonObj.Complemento}', Logradouro = '${jsonObj.Logradouro}', Cidade = '${jsonObj.Cidade}', Estado = '${jsonObj.Estado}', Numero = ${jsonObj.Numero}, Bairro = '${jsonObj.Bairro}' WHERE CPF = '${jsonObj.CPF}'`
    );
  }

  static removeElement(jsonObj) {
    console.log("removeElement", jsonObj);
    db.execute(`DELETE FROM venda WHERE cpffuncionario = '${jsonObj.cpf}'`);
    return db.execute(`DELETE FROM funcionario WHERE cpf = '${jsonObj.cpf}'`);
  }
};
