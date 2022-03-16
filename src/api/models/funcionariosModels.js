const {Model, DataTypes} = require('sequelize')

class Funcionarios extends Model{
    static init(sequelize){
        super.init({
            emp_nome: DataTypes.STRING, emp_contato: DataTypes.STRING, emp_email: DataTypes.STRING
        },{
            sequelize,
            tableName: 'funcionarios'
        })
        return this
    }
}

module.exports = Funcionarios