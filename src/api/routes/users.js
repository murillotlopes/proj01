const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    return res.send({Message: `Método GET de Usuários funcionando corretamente!!!` })
});


router.post('/users', (req, res) => {
//    return res.send({Message: `Método POST de Usuários funcionando corretamente!!!` })
    let obj = req.query;
    return res.send({Message: `Método POST de Usuários funcionando corretamente!!! ${obj.nome}` })
});
 
router.post('/create', (req, res) => {
    return res.send({Message: `Usuário criado com sucesso!!!` })
});

module.exports = router;