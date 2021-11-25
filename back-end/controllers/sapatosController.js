const Sapatos = require("../models/sapatosModel");

exports.get = async (req, res, next) => {
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

exports.post = async (req, res, next) => {
  try {
    await Sapatos.insertElement();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Sapatos.removeElement();
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
