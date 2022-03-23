const Funcionarios = require('../models/funcionariosModels')
const Empresas = require('../models/empresasModels')

module.exports = {
    async index(req, res) {
        const funcionarios = await Funcionarios.findAll()
        return res.json(funcionarios)
    },

    async create(req, res){
        const { empresa_id } = req.params
        const {fun_nome, fun_password, emp_email} = req.body

        console.log('Parametros esperado: ' + empresa_id)
        console.log('Dados: ' + req.body)

        const empresa = await Empresas.findByPk(empresa_id)

        if(!empresa){
            return res.status(400).json({error: 'empresa não encontrada'})
        }

        const funcionario = await Funcionarios.create(fun_nome, fun_password, emp_email, empresa_id)

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