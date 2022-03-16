
const Users = require('../models/usersModels')

module.exports = {
    async index(req, res) {
        
        const users = await Users.findAll()
        return res.json({users})
    },

    async store(req, res) {
        const {usr_nome, usr_password, usr_email} = req.body

        const user = await Users.create(usr_nome, usr_password, usr_email)
        return res.status(200).send({
            status: 1,
            message: 'Usuário cadastrado',
            user
        })
    }

    
}