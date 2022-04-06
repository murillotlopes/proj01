'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'funcionarios',
          'fun_logado', {
            type: Sequelize.DataTypes.STRING(1)
          },
          'fun_senha', {
            type: Sequelize.DataTypes.STRING
          }, {transaction: t}
        ),
      ])
    })
  },  
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn(
          'funcionarios',
          'fun_logado',
          'fun_senha', 
          {transaction: t}
        ),
      ])
    })
  },
};
