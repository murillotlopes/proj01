const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conexao = new Sequelize(dbConfig)

const root = require('../api/models/index')
const empresas = require('../api/models/empresasModels')
const funcionarios = require('../api/models/funcionariosModels')
const users = require('../api/models/usersModels')

try{
    conexao.authenticate()
    console.log('Conexão estabelecida')

}catch(error){
    console.log('Falha na conexão: ', error)
}

root.init(conexao)
empresas.init(conexao)
funcionarios.init(conexao)
users.init(conexao)

empresas.associate(conexao.models)
funcionarios.associate(conexao.models)

module.exports = conexao