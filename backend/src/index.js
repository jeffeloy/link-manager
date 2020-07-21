const express = require("express");

const app = express();

app.listem(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
