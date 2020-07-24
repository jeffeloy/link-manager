const express = require("express");

const AccountController = require("./controllers/AccountController");
const { accountSignUp } = require("./validators/account");

const routes = express.Router();

routes.get("/users/sign-in", AccountController.signIn);
routes.post("/users/sign-up", accountSignUp, AccountController.signUp);

module.exports = routes;
