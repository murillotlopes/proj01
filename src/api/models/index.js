const {Model, DataTypes} = require('sequelize')

class Root extends Model{
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: 'usuarios'
            }
        )

        return this
    }
}

module.exports = Root