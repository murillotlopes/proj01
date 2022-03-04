
const express = require('express')
const cors = require('cors')

const routeRoot = require('./api/routes/index')
const routeUsers = require('./api/routes/users')

// require('./database/indexDB')

const app = express()
app.use(cors())

app.use(express.json())

app.use(routeRoot)
app.use(routeUsers)

app.listen(3000)




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

