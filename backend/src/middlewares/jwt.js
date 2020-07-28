const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt.js");

const checkJwt = (req, res, next) => {
  const { url: path } = req;

  const excludedPaths = ["/users/sign-in", "/users/sign-up", "/refresh"];
  const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));

  if (isExcluded) return next();

  const token = getTokenFromHeaders(req.headers);

  if (!token) {
    return res.jsonUnauthorized(null, "Invalid token");
  }

  try {
    const decoded = verifyJwt(token);
    req.accountId = decoded.id;
    next();
  } catch (error) {
    return res.jsonUnauthorized(null, "Invalid token");
  }
};

module.exports = checkJwt;
