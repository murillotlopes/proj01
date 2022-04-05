'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      empresa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'empresas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      fun_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      fun_password: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      fun_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('funcionarios');
  }
};
