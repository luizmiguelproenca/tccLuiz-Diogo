const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome_produto: {
        type: String,
        required: true,
    },
    categoria: {
        nome_categoria: {
            type: String,
            required: true
        }
    },
    preço: {
        type: Number,
        required: true
    },
    descrição: {
        type: String,
        required: false
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("Produto", produtoSchema);