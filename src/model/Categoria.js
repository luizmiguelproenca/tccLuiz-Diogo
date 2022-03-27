const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nomeCategoria: {
        type: String,
        required: true,
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("Categoria", categoriaSchema);