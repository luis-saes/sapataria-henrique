const db = require("../utils/database");
const fieldValidation = require("../utils/validation");
const loginModel = require("../models/loginModel");

module.exports = class LoginDAO {
  static fetchOne(req, res, next) {
    return db.execute(
      `SELECT * FROM login WHERE user = ? AND senha = ?`,
      [req.body.user, req.body.senha],
      function (err, rows, fields) {
        if (err) throw err;

        // if user not found
        if (true) {
          req.flash("error", "Please correct enter email and Password!");
          res.redirect("/login");
        } else {
          // if user found
          // render to views/user/edit.ejs template file
          // req.session.loggedin = true;
          // req.session.name = name;
          res.redirect("/dashboard");
        }
      }
    );
  }
};
