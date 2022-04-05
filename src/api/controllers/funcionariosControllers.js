const Funcionarios = require('../models/funcionariosModels')
const Empresas = require('../models/empresasModels')

module.exports = {
    async indexAll(req, res) {
        const funcionarios = await Funcionarios.findAll(
                {
                    attributes: {
                    exclude: ['fun_senha']
                }
            }
        )

        return res.json(funcionarios)
    },

    async index(req, res) {
        const { empresa_id } = req.params

        const funcionario = await Empresas.findByPk(
            empresa_id, {
                include: { association: 'empresa'}
            }
        )

        return res.json(funcionario)
    },

    async create(req, res){
        const { empresa_id } = req.params
        const {fun_nome, fun_password, emp_email, fun_senha} = req.body

        console.log('Parametros esperado: ' + empresa_id)
        console.log('Dados: ' + req.body)

        const empresa = await Empresas.findByPk(empresa_id)

        if(!empresa){
            return res.status(400).json({error: 'empresa não encontrada'})
        }

        const funcionario = await Funcionarios.create(fun_nome, fun_password, emp_email, empresa_id, fun_senha)

        return res.status(200).send({
            status: 1,
            message: 'funcionario cadastrado',
            funcionario
        })
    },

    async update(req, res) {
        const { funcionario_id } = req.params
        const {fun_nome, fun_password, emp_email, fun_sexo} = req.body

        await Funcionarios.update({
            fun_nome, fun_password, emp_email, fun_sexo
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