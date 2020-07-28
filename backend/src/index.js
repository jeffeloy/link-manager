const express = require("express");
const cors = require("cors");
const db = require("./models");
const response = require("./middlewares/response.js");
const checkJwt = require("./middlewares/jwt.js");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
  });
});
