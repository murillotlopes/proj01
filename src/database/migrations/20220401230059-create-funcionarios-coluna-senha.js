'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'funcionarios',
          'fun_senha', {
            type: Sequelize.DataTypes.STRING()
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
          'fun_senha', 
          {transaction: t}
        ),
      ])
    })
  },
};
