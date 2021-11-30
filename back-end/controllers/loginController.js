const Login = require("../persistencia/loginDAO");

exports.loginGet = async (req, res, next) => {
  console.log(req.body);
  try {
    const oneLogin = await Login.fetchOne(req, res, next);
    res.status(200).json(oneLogin);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
