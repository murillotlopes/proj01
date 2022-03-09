const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/usersControllers')


router.get('/users', userControllers.index)

router.post('/users', userControllers.store)

module.exports = router