const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nome_produto: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true
        
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: false
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("Produto", produtoSchema);