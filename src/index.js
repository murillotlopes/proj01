const express = require('express')
const cors = require('cors')

const routeFuncionarios = require('./api/routes/funcionariosRoutes')
const routeEmpresas = require('./api/routes/empresasRoutes')

require('./database/indexDB')

const app = express()

app.use(cors())
app.use(express.json())

app.use(routeFuncionarios)
app.use(routeEmpresas)

app.listen(3000, function() {
    console.log('Rodando na porta 3000')
})

module.exports = app
