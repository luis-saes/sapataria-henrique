const Sapatos = require("../persistencia/sapatosDAO");

exports.sapatosGet = async (req, res, next) => {
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

exports.sapatosPost = async (req, res, next) => {
  try {
    console.log("req.body funcionando no arquivo SapatosController.js");
    await Sapatos.insertElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.sapatosUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    await Sapatos.updateElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.sapatosDelete = async (req, res, next) => {
  try {
    await Sapatos.removeElement(req.body);
    res.status(200);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
