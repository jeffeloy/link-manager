const { Link } = require("../models");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const accountId = 1;
    const { label, url, isSocial } = req.body;

    const image = "https://google.com/image.jpg";

    const link = await Link.create({
      label,
      url,
      isSocial,
      image,
      accountId,
    });

    return res.jsonOK(link);
  },
};
