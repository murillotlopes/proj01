
const express = require('express')
const cors = require('cors')

const routeUsers = require('./api/routes/usersRoutes')
const routeFuncionarios = require('./api/routes/funcionariosRoutes')
const routeEmpresas = require('./api/routes/empresasRoutes')

require('./database/indexDB')

const app = express()

app.use(cors())
app.use(express.json())

app.use(routeUsers)
app.use(routeFuncionarios)
app.use(routeEmpresas)

app.listen(3000, function() {
    console.log('Rodando na porta 3000')
})

module.exports = app


// ou



/* const express = require("express");
const http = require('http');

const routeRoot = require('./api/routes/index')

// require('./database/indexdb.js');

const app = express();

app.set('url','http://localhost:');
app.set('porta',3333);

app.use(express.json());

app.use(routeRoot)

http.createServer(app).listen(app.get('porta'),function(){
    console.log('\nServidor Rodando em ' + app.get('url') + app.get('porta'));
}) */

