const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const conexao = new Sequelize(dbConfig)

const root = require('../api/models/index')

try{
    conexao.authenticate()
    console.log('Conexão estabelecida')

}catch(error){
    console.log('Falha na conexão: ', error)
}

root.init(conexao)

module.exports = conexao