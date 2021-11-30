const Vendas = require("../persistencia/vendasDAO");

exports.vendasGet = async (req, res, next) => {
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

exports.vendasPost = async (req, res, next) => {
  try {
    console.log("req.body funcionando no arquivo VendasController.js");
    await Vendas.insertElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.vendasUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    await Vendas.updateElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.vendasDelete = async (req, res, next) => {
  try {
    await Vendas.removeElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
