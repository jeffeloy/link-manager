const { Account } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  async signIn(req, res) {
    return res.json("Sign-in");
  },
  async signUp(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });

    if (account) return res.json("Account already exists");

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);

    const newAccount = await Account.create({
      email,
      password: hash,
    });

    return res.json(newAccount);
  },
};
