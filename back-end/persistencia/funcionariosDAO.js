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

  static updateElement(
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
      `UPDATE CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro FROM funcionario WHERE CPF = '${cpf}'``INSERT INTO funcionario (CPF, Nome, Salario, Complemento, Logradouro, Cidade, Estado, Numero, Bairro) VALUES ('${cpf}', '${nome}', ${salario}, '${complemento}', '${logradouro}', '${cidade}', '${estado}', ${numero}, '${bairro}')`
    );
  }

  static removeElement(cpf) {
    db.execute(`DELETE FROM venda WHERE cpffuncionario = '${cpf}'`);
    return db.execute(`DELETE FROM funcionario WHERE cpf = '${cpf}'`);
  }
};
