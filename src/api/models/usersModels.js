const {Model, DataTypes} = require('sequelize')

class Users extends Model {
    static init(sequelize){
        super.init({
            usr_nome: DataTypes.STRING,
            usr_email: DataTypes.STRING,
            usr_password: DataTypes.STRING
        },{
            sequelize,
            tableName: 'users'
        })
        return this
    }
}

module.exports = Users