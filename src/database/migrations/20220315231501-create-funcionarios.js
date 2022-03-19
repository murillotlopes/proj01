'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('funcionarios', {
      id:{
        type: Sequelize.INTERGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      empresa_id: {
        type: Sequelize.INTERGER,
        allowNull: false,
        references: {model: 'empresas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fun_nome: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      fun_password: {
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
    await queryInterface.dropTable('funcionarios')
  }
};
