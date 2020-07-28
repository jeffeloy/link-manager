const { Account } = require("../models");
const bcrypt = require("bcrypt");
const { getMessage } = require("../helpers/validator");
const {
  generateJwt,
  generateRefreshJwt,
  verifyRefreshJwt,
  getTokenFromHeaders,
} = require("../helpers/jwt");

module.exports = {
  async signIn(req, res) {
    const { email, password } = req.body;

    const account = await Account.findOne({ where: { email } });

    const match = account
      ? bcrypt.compareSync(password, account.password)
      : null;

    if (!match)
      return res.jsonBadRequest(
        null,
        getMessage("account.signup.email_exists")
      );

    const token = generateJwt({ id: account.id });
    const refreshToken = generateRefreshJwt({
      id: account.id,
      version: account.jwtVersion,
    });

    return res.jsonOK(account, getMessage("account.signin.sucess"), {
      token,
      refreshToken,
    });
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
    const refreshToken = generateRefreshJwt({
      id: newAccount.id,
      version: newAccount.jwtVersion,
    });

    return res.jsonOK(newAccount, getMessage("account.signup.sucess"), {
      token,
      refreshToken,
    });
  },

  async refreshToken(req, res) {
    const token = getTokenFromHeaders(req.headers);
    if (!token) {
      return res.jsonUnauthorized(null, "Invalid token");
    }

    try {
      const decoded = verifyRefreshJwt(token);
      const account = await Account.findByPk(decoded.id);
      if (!account) return res.jsonUnauthorized(null, "Invalid token");

      if (decoded.version !== account.jwtVersion) {
        return res.jsonUnauthorized(null, "Invalid token");
      }

      const meta = {
        token: generateJwt({ id: account.id }),
      };

      return res.jsonOK(null, null, meta);
    } catch (error) {
      return res.jsonUnauthorized(null, "Invalid token");
    }
  },
};
