const Clientes = require("../persistencia/clientesDAO");

exports.clientesGet = async (req, res, next) => {
  try {
    const [allClientes] = await Clientes.fetchAll();
    res.status(200).json(allClientes);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.clientesPost = async (req, res, next) => {
  try {
    console.log("req.body funcionando no arquivo ClientesController.js");
    await Clientes.insertElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.clientesUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    await Clientes.updateElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.clientesDelete = async (req, res, next) => {
  try {
    await Clientes.removeElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
