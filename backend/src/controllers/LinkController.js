const { Link } = require("../models");

module.exports = {
  async index(req, res) {
    const accountId = 1;

    const links = await Link.findAll({ where: { accountId } });

    return res.jsonOK(links);
  },
  async show(req, res) {
    const accountId = 1;
    const { id } = req.params;

    const link = await Link.findOne({ where: { id, accountId } });
    if (!link) return res.jsonNotFound();

    return res.jsonOK(link);
  },

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

  async update(req, res) {
    const accountId = 1;
    const { id } = req.params;
    const { body } = req;

    const fields = ["label", "url", "isSocial"];

    const link = await Link.findOne({ where: { id, accountId } });

    if (!link) return res.jsonNotFound();

    fields.map((fieldName) => {
      const newValue = body[fieldName];
      if (newValue) link[fieldName] = newValue;
    });

    await link.save();

    return res.jsonOK(link);
  },
};
