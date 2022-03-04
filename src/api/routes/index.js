const express = require('express')
const router = express.Router()

const rootControllers = require('../controllers/index.js')

router.get('/', (req, res) => {

    return res.send({Message: `Método GET funcionando corretamente!!!` })
});

router.post('/', (req, res) => {
    let obj = req.query;    
    return res.send({Message: `Método POST funcionando corretamente!!! ${obj.nome}` })
});

module.exports = router