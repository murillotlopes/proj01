const express = require('express')
const router = express.Router()

const funcionariosControllers = require('../controllers/funcionariosControllers')

router.get('/funcionarios', funcionariosControllers.indexAll)
router.get('/empresas/:empresa_id/funcionarios', funcionariosControllers.index)
router.post('/empresas/:empresa_id/funcionarios', funcionariosControllers.create)
router.patch('/funcionarios', funcionariosControllers.update)
router.delete('/funcionarios', funcionariosControllers.delete)

module.exports = router