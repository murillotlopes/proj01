const express = require('express')
const router = express.Router()

const rootControllers = require('../controllers/index.js')

router.get('/', rootControllers)
router.post('/', rootControllers)
router.patch('/', rootControllers)
router.delete('/', rootControllers)

// module.exports = router