exports.get404 = (req, res, next) => {
  const error = new Error("não encontrado");
  error.status = 404;
  next(error);
};

exports.get500 = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
};
