const express = require('express')
const router = express.Router()

const funcionariosControllers = require('../controllers/funcionariosControllers')

router.get('/funcionarios', funcionariosControllers.index)
router.post('/funcionarios', funcionariosControllers.create)
router.patch('/funcionarios', funcionariosControllers.update)
router.delete('/funcionarios', funcionariosControllers.delete)

module.exports = router