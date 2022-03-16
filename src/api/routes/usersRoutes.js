const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/usersControllers')

router.get('/users', userControllers.index)
router.post('/users', userControllers.store)
//router.patch('/users', userControllers)
//router.delete('users', userControllers)

module.exports = router