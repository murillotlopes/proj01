const Funcionarios = require('../models/funcionariosModels')
const Empresas = require('../models/empresasModels')
const bcrypt = require('bcryptjs/dist/bcrypt')
const jwt = require('jsonwebtoken')

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
        const { fun_nome, fun_email, fun_password, 
                fun_sexo, fun_logado, fun_senha } = req.body

        console.log('Parametros esperado: ' + empresa_id)
        console.log('Dados: ' + req.body)

        const empresa = await Empresas.findByPk(empresa_id)

        if(!empresa){
            return res.status(400).json({error: 'empresa não encontrada'})
        }

        const funcionario = await Funcionarios.create({
            fun_nome,
            fun_email,
            fun_password,
            empresa_id,
            fun_sexo,
            fun_logado,
            fun_senha,
        })

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
            fun_nome, fun_email, fun_password, fun_sexo 
        }, {
            where: { id: funcionario_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionário atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const { id } = req.params

        const funcionario = await 

        await Funcionarios.destroy({
            where: {
                id: id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'funcionario deletado'
        })
    },

    async login(req, res) {
        const {fun_senha, fun_email, fun_logado} = req.body

        const funcionario = await Funcionarios.findOne({ where: {fun_email}})

        if (!funcionario) {
            return res.status(400).send({
                status: 0,
                message: 'e-mail ou senha incorretos!'
            })
        }

        if(!bcrypt.compareSync(fun_senha, funcionario.fun_senha)){
            return res.status(400).send({
                status: 0,
                message: 'senha ou e-mail incorretos!'
            })
        } else {
            console.log('Dados conferem!')
        }

        const funcionario_id = funcionario.id
        funcionario.fun_logado = '1'

        await Funcionarios.update({
            fun_logado
        }, {
            where: {
                id: funcionario_id
            }
        })

        const token = jwt.sign({
            codigo: funcionario.id,
            nome: funcionario.fun_nome,
            email: funcionario.fun_email
        }, 
            'minhaChaveSecreta',{
                expiresIn: 30
            }
        )

        return res.status(200).send({
            status: 1,
            message: 'usuário logado com sucesso',
            funcionario,
            token
        })
    }
}