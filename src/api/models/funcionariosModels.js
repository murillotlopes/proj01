const {Model, DataTypes} = require('sequelize')

class Funcionarios extends Model{
    static init(sequelize){
        super.init({
            emp_nome: DataTypes.STRING, 
            emp_contato: DataTypes.STRING, 
            emp_email: DataTypes.STRING,
            empresa_id: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'funcionarios'
        })
        return this

    }

    static associate(models){
        this.belongsTo(models.Empresas, {foreignKey: 'empresa_id', as: 'empresas'})
    }
}

module.exports = Funcionarios