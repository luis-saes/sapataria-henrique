const Sapatos = require("../models/sapatosModel");

exports.sapatosController = async (req, res, next) => {
  try {
    const [allSapatos] = await Sapatos.fetchAll();
    res.status(200).json(allSapatos);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
