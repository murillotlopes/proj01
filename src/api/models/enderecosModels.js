const { Model, DataTypes } = require('sequelize')

class Enderecos extends Model{
    static init(sequelize){
        super.init({
            end_endereco: DataTypes.STRING,
            end_cep: DataTypes.STRING,
            end_numero: DataTypes.STRING
        },{
            sequelize,
            tableName: 'enderecos'
        })

        return this
    }

    static associate(models){
        this.belongsTo(models.Usuarios,
            {foreignKey: 'usuarios_id', as: 'usuarios'})
    }
}

module.exports = Enderecos