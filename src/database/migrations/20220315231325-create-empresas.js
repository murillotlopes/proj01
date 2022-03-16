'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {

    return await queryInterface.createTable('empresas', {
      id:{
        type: Sequelize.INTERGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      emp_nome: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      emp_contato: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      emp_email: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATA
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas')
  }
};
