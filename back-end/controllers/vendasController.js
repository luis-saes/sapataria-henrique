const Vendas = require("../models/vendasModel");

exports.vendasController = async (req, res, next) => {
  try {
    const [allVendas] = await Vendas.fetchAll();
    res.status(200).json(allVendas);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
