const { Account } = require("../models");
const bcrypt = require("bcrypt");
const { getMessage } = require("../helpers/validator");
const { generateJwt, generateRefreshJwt } = require("../helpers/jwt");

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

    const token = generateJwt({ id: newAccount.id });
    const refreshToken = generateRefreshJwt({ id: newAccount.id });

    return res.jsonOK(newAccount, getMessage("account.signup.sucess"), {
      token,
      refreshToken,
    });
  },
};
