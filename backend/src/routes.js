const express = require("express");

const AccountController = require("./controllers/AccountController");

const routes = express.Router();

routes.get("/users/sign-in", AccountController.signIn);
routes.post("/users/sign-up", AccountController.signUp);

module.exports = routes;
