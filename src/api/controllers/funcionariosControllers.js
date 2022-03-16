const Funcionarios = require('../models/funcionariosModels')

module.exports = {
    async index(req, res) {
        const funcionarios = await Funcionarios.findAll()
        return res.json(funcionarios)
    },

    async create(req, res){
        const {fun_nome, fun_password, emp_email} = req.body

        const funcionario = await Funcionarios.create(fun_nome, fun_password, emp_email)

        return res.status(200).send({
            status: 1,
            message: 'funcionario cadastrado',
            funcionario
        })
    },

    async update(req, res) {
        const {fun_nome, fun_password, emp_email} = req.body

        await Funcionarios.update({
            fun_nome, fun_password, emp_email
        })

        return res.status(200).send({
            status: 1,
            message: 'funcionario atualizado'
        })
    },

    async delete(req, res) {
        const { id } = req.params

        await Funcionarios.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'funcionario deletado'
        })
    }
}