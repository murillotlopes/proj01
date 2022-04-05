'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      usr_nome: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      usr_email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      usr_password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('usuarios')
  }
};
