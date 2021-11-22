const Funcionarios = require("../models/funcionariosModel");

exports.funcionariosController = async (req, res, next) => {
  try {
    const [allFuncionarios] = await Funcionarios.fetchAll();
    res.status(200).json(allFuncionarios);
    res.json({
      funcionariosList: allFuncionarios,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
