'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      usuarios_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'usuarios',
        key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      end_endereco: {
        type: Sequelize.STRING(60),
        allowNull:false,
      },
      end_cep: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      end_numero: {
        type: Sequelize.STRING(10),
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
    return await queryInterface.dropTable('enderecos')
  }
};
