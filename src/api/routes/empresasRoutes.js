const express = require('express')
const router = express.Router()

const empresasControllers = require('../controllers/empresasControllers')

router.get('/empresas', empresasControllers.index)
router.post('/empresas', empresasControllers.create)
router.patch('/empresas', empresasControllers.update)
router.delete('/empresas', empresasControllers.delete)

module.exports = router