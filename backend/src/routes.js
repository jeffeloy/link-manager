const express = require("express");

const AccountController = require("./controllers/AccountController");
const LinkController = require("./controllers/LinkController");
const { accountSignUp, accountSignIn } = require("./validators/account");

const routes = express.Router();

routes.post("/users/sign-in", accountSignIn, AccountController.signIn);
routes.post("/users/sign-up", accountSignUp, AccountController.signUp);

routes.get("/links", LinkController.index);
routes.get("/links/:id", LinkController.show);
routes.post("/links", LinkController.store);
routes.put("/links/:id", LinkController.update);

module.exports = routes;
