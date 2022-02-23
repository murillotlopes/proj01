const express = require('express')
const router = express.Router()

const rootControllers = require('../controllers/index.js')

router.get('/', rootControllers.index)

module.exports = router