const { Account } = require("../models");
const bcrypt = require("bcrypt");
const { getMessage } = require("../helpers/validator");

module.exports = {
  async signIn(req, res) {
    return res.json("Sign-in");
  },
  async signUp(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });

    if (account)
      return res.jsonBadRequest(
        null,
        getMessage("account.signup.email_exists")
      );

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);

    const newAccount = await Account.create({
      email,
      password: hash,
    });

    return res.jsonOK(newAccount, getMessage("account.signup.sucess"));
  },
};
