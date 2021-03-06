const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conexao = new Sequelize(dbConfig)

const empresas = require('../api/models/empresasModels')
const funcionarios = require('../api/models/funcionariosModels')

try{
    conexao.authenticate()
    console.log('Conexão estabelecida')

}catch(error){
    console.log('Falha na conexão: ', error)
}

empresas.init(conexao)
funcionarios.init(conexao)

empresas.associate(conexao.models)
funcionarios.associate(conexao.models)

module.exports = conexao
