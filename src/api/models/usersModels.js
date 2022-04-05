const {Model, DataTypes} = require('sequelize')

class Users extends Model {
    static init(sequelize){
        super.init({
            usr_nome: DataTypes.STRING,
            usr_email: DataTypes.STRING,
            usr_password: DataTypes.STRING
        },{
            sequelize,
            tableName: 'usuarios'
        })
        return this
    }

    static associate(models){
        this.hasMany(models.Enderecos,
        {foreignKey: 'usuarios_id', as: 'usuarios'})
    }
}

module.exports = Users