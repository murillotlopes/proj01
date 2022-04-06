const Empresas = require('../models/empresasModels')

module.exports = {
    async indexAll(req, res) {

        const empresas = await Empresas.findAll()
        return res.json(empresas)
    },

    async create(req, res) {
        const {emp_nome, emp_contato, emp_email} = req.body

        const empresa = await Empresas.create({emp_nome, emp_contato, emp_email})

        return res.status(200).send({
            status: 1,
            message: 'Empresa cadastrada',
            empresa
        })
    },

    async update(req, res) {
        const {emp_nome, emp_contato, emp_email} = req.body

        await Empresas.update({
            emp_nome, emp_contato, emp_email
        })

        return res.status(200).send({
            status: 1,
            message: 'Empresa atualizada com sucesso'
        })
    },

    async delete(req, res) {
        const { id } = req.params

        await Empresas.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'empresa deletada'
        })
    }

}