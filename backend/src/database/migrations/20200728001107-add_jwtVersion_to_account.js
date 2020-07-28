"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn("accounts", "jwtVersion", {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: "password",
      defaultValue: 0,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn("accounts", "jwtVersion");
  },
};
