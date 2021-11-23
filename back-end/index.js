const express = require("express");
const bodyParser = require("body-parser");
const funcionariosRoutes = require("./routes/funcionariosRoute");
const clientesRoutes = require("./routes/clientesRoute");
const sapatosRoutes = require("./routes/sapatosRoute");
const vendasRoutes = require("./routes/vendasRoute");
const errorController = require("./controllers/error");

const app = express();
const ports = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use("/funcionarios", funcionariosRoutes);
app.use("/clientes", clientesRoutes);
app.use("/sapatos", sapatosRoutes);
app.use("/vendas", vendasRoutes);
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`rodando no port ${ports}`));
