const express = require("express");
const bodyParser = require("body-parser");
const funcionariosRoutes = require("./routes/funcionariosRoute");
const errorController = require("./controllers/error");

const app = express();
const ports = process.env.PORT || 8000;

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Acess-Control-Allow-Origin", "*");
//   res.setHeader("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Acess-Control-Allow-Headers", "Content-Type, Authorization");
// });

app.use("/funcionarios/", funcionariosRoutes);
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`rodando no port ${ports}`));
