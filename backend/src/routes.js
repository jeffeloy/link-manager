const express = require("express");

const AccountController = require("./controllers/AccountController");
const { accountSignUp, accountSignIn } = require("./validators/account");

const routes = express.Router();

routes.post("/users/sign-in", accountSignIn, AccountController.signIn);
routes.post("/users/sign-up", accountSignUp, AccountController.signUp);

module.exports = routes;
