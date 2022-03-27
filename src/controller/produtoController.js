const Produto = require('../model/Produto');
const { response } = require('express');

module.exports = {
    async index(req, res) {
        try{
            const produtos = await Produto.find();
            return res.status(200).json(produtos);
        }catch{
            res.status(500).json({error: err.message});
        }
    },

    async store(req, res){
        const {nome_produto, categoria, preço, descrição} = req.body;

        if(!nome_produto || !categoria || !preço || !descrição){
            return res.status(400).json({error: "Preencha todos os campos!"})
        }

        const produto = new Produto({
            nome_produto,
            categoria,
            preço,
            descrição,
        })

        try{
            await produto.save();

            return res.status(201).json({
                message: "Produto adicionado com sucesso!"
            })
        }catch(err){
            res.status(400).json({error: err.message});
        }
    }

}