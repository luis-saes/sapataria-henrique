const cpf = require("gerador-validador-cpf");

exports.clientesValidation = (dataJson) => {
  if (!cpf.validate(dataJson.cpf)) {
    console.log(`Atributo CPF com valor ${dataJson.cpf} inválido`);
    return false;
  } else if (!dataJson.nome.length || dataJson.nome.length > 255) {
    console.log(`Atributo nome com valor ${dataJson.nome} inválido`);
    return false;
  } else if (!dataJson.telefone.length || dataJson.telefone.length > 45) {
    console.log(`Atributo telefone com valor ${dataJson.telefone} inválido`);
    return false;
  }

  return true;
};

exports.funcionariosValidation = (dataJson) => {
  if (!cpf.validate(dataJson.cpf)) {
    console.log(`Atributo CPF com valor ${dataJson.cpf} inválido`);
    return false;
  } else if (!dataJson.nome.length || dataJson.nome.length > 255) {
    console.log(`Atributo nome com valor ${dataJson.nome} inválido`);
    return false;
  } else if (isNaN(dataJson.salario)) {
    console.log(`Atributo salario com valor ${dataJson.salario} inválido`);
    return false;
  } else if (
    !dataJson.complemento.length ||
    dataJson.complemento.length > 255
  ) {
    console.log(
      `Atributo complemento com valor ${dataJson.complemento} inválido`
    );
    return false;
  } else if (!dataJson.logradouro.length || dataJson.logradouro.length > 255) {
    console.log(
      `Atributo logradouro com valor ${dataJson.logradouro} inválido`
    );
    return false;
  } else if (!dataJson.cidade.length || dataJson.cidade.length > 255) {
    console.log(`Atributo cidade com valor ${dataJson.cidade} inválido`);
    return false;
  } else if (!dataJson.estado.length || dataJson.estado.length != 2) {
    console.log(`Atributo estado com valor ${dataJson.estado} inválido`);
    return false;
  } else if (isNaN(dataJson.numero)) {
    console.log(`Atributo numero com valor ${dataJson.numero} inválido`);
    return false;
  } else if (!dataJson.bairro.length || dataJson.bairro.length > 255) {
    console.log(`Atributo bairro com valor ${dataJson.bairro} inválido`);
    return false;
  }

  return true;
};

exports.produtosValidation = (dataJson) => {
  if (isNaN(dataJson.referencia)) {
    console.log(
      `Atributo referencia com valor ${dataJson.referencia} inválido`
    );
    return false;
  } else if (isNaN(dataJson.precoVenda)) {
    console.log(
      `Atributo precoVenda com valor ${dataJson.precoVenda} inválido`
    );
    return false;
  } else if (!dataJson.nome.length || dataJson.nome.length > 255) {
    console.log(`Atributo nome com valor ${dataJson.nome} inválido`);
    return false;
  } else if (!dataJson.descricao.length || dataJson.descricao.length > 255) {
    console.log(`Atributo descricao com valor ${dataJson.descricao} inválido`);
    return false;
  } else if (!dataJson.marca.length || dataJson.marca.length > 255) {
    console.log(`Atributo marca com valor ${dataJson.marca} inválido`);
    return false;
  } else if (isNaN(dataJson.tamanho)) {
    console.log(`Atributo tamanho com valor ${dataJson.tamanho} inválido`);
    return false;
  } else if (isNaN(dataJson.quantidadeEstoque)) {
    console.log(
      `Atributo quantidadeEstoque com valor ${dataJson.quantidadeEstoque} inválido`
    );
    return false;
  }

  return true;
};

exports.vendasValidation = (dataJson) => {
  let today = new Date();

  if (isNaN(dataJson.id)) {
    console.log(`Atributo id com valor ${dataJson.id} inválido`);
    return false;
  } else if (dataJson.situacao.length != 1) {
    console.log(`Atributo situacao com valor ${dataJson.situacao} inválido`);
    return false;
  } else if (!(dataJson.data instanceof Date) || dataJson.data > today) {
    console.log(`Atributo data com valor ${dataJson.data} inválido`);
    return false;
  } else if (dataJson.formaPagamento.length != 2) {
    console.log(
      `Atributo formaPagamento com valor ${dataJson.formaPagamento} inválido`
    );
    return false;
  } else if (isNaN(dataJson.precoTotal)) {
    console.log(
      `Atributo precoTotal com valor ${dataJson.precoTotal} inválido`
    );
    return false;
  } else if (!cpf.validate(dataJson.CPFFuncionario)) {
    console.log(
      `Atributo CPFFuncionario com valor ${dataJson.CPFFuncionario} inválido`
    );
    return false;
  } else if (!cpf.validate(dataJson.CPFCliente)) {
    console.log(
      `Atributo CPFCliente com valor ${dataJson.CPFCliente} inválido`
    );
    return false;
  }

  return true;
};
