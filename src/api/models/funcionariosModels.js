const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs')

class Funcionarios extends Model {
    static init(sequelize) {
        super.init({
            fun_nome: DataTypes.STRING,
            fun_password: DataTypes.STRING,
            fun_email: DataTypes.STRING,
            empresa_id: DataTypes.INTEGER,
            fun_sexo: DataTypes.STRING,
            fun_logado: DataTypes.STRING,
            fun_senha: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'funcionarios',

            hooks: {
                beforeCreate: (funcionario) => {
                    console.log("Executando....BeforeCreate")
                    const salt = bcrypt.genSaltSync()
                    funcionario.fun_senha = bcrypt.hashSync(funcionario.fun_senha, salt)
                    console.log(funcionario.fun_senha)
                },

                afterCreate: (funcionario) => {
                    console.log("Executando............ AfterCreate....")
                }
            }
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Empresas, {foreignKey: "empresa_id", as: "empresa"})
    }
}

module.exports = Funcionarios
