const express = require("express");

const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/users/sign-in", UserController.signIn);
routes.get("/users/sign-up", UserController.signUp);

module.exports = routes;
