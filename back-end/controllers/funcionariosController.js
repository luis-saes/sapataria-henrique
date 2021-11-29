const Funcionarios = require("../persistencia/funcionariosDAO");

exports.funcionariosGet = async (req, res, next) => {
  try {
    const [allFuncionarios] = await Funcionarios.fetchAll();
    res.status(200).json(allFuncionarios);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.funcionariosPost = async (req, res, next) => {
  try {
    console.log("req.body funcionando no arquivo FuncionariosController.js");
    await Funcionarios.insertElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.funcionariosUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    await Funcionarios.updateElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.funcionariosDelete = async (req, res, next) => {
  try {
    await Funcionarios.removeElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
