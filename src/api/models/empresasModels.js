const {Model, DataTypes} = require('sequelize')

class Empresas extends Model {
    static init(sequelize){
        super.init({
            emp_nome: DataTypes.STRING, emp_contato: DataTypes.STRING, emp_email: DataTypes.STRING
        },{
            sequelize,
            tableName: empresas
        })
        return this
    }
}

module.exports = Empresas