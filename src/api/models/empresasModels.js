const {Model, DataTypes} = require('sequelize')

class Empresas extends Model {
    static init(sequelize){
        super.init({
            emp_nome: DataTypes.STRING, emp_contato: DataTypes.STRING, emp_email: DataTypes.STRING
        },{
            sequelize,
            tableName: 'empresas'
        })
        return this
    }

    static associate(models){
        this.hasMany(models.Funcionarios, {foreignKey: 'empresa_id', as: 'empresas'})
    }
}

module.exports = Empresas