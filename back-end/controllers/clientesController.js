const Clientes = require("../models/clientesModel");

exports.clientesController = async (req, res, next) => {
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
