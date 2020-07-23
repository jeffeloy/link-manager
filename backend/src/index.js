const express = require("express");
const db = require("./models");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
  });
});
