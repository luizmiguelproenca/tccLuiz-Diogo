const Produto = require('../model/Produto');
const {v4: uuid} = require('uuid')

module.exports = {
    async index(req, res) {
        try{
            const produtos = await Produto.find();
            return res.status(200).json(produtos);
        }catch (err){
            res.status(500).json({error: err.message});
        }
    },

    async store(req, res){
        const {nome_produto, categoria, preco, descricao} = req.body;
        if(!nome_produto || !categoria || !preco ){
            return res.status(400).json({error: "Preencha todos os campos obrigatórios!"})
        }

        const produto = new Produto({
            _id: uuid(),
            nome_produto,
            categoria,
            preco,
            descricao,
        })

        try{
            await produto.save();

            return res.status(201).json({
                message: "Produto adicionado com sucesso!"
            })
        }catch(err){
            res.status(400).json({error: err.message});
        }
    },

    async update(req, res){
        const {nome_produto, categoria, preco, descricao} = req.body;

        if(nome_produto) res.produto.nome_produto = nome_produto
        if(categoria) res.produto.categoria = categoria
        if(preco) res.produto.preco = preco
        if(descricao) res.produto.descricao = descricao

        try{
            await res.produto.save();
            return res.status(200).json({
                message: "Produto alterado com sucesso!"
            })
        } catch (err){
            res.status(500).json({
                error: err.message
            })
        }
    },

    async delete(req, res){
        try{
            await res.produto.remove()
            return res.status(200).json({
                message: "Produto deletado com sucesso!"
            })
        } catch (err){
            return res.status(500).json({
                error: err.message
            })
        }
    }

}