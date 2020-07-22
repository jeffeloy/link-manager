const express = require("express");
const db = require("./models");

const routes = require("./routes");

const app = express();

app.use(routes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Sucess!");
  })
  .catch(() => {});
app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
