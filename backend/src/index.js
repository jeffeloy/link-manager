const express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
