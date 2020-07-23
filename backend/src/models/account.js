module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("Account", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  Account.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };
  return Account;
};
