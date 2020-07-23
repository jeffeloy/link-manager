const { Account } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  async signIn(req, res) {
    return res.json("Sign-in");
  },
  async signUp(req, res) {
    const { email, password } = req.body;

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);

    const account = await Account.create({
      email,
      password: hash,
    });

    return res.json(account);
  },
};
