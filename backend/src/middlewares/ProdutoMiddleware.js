const { validate: isUuid } = require("uuid")
const Produto = require("../model/Produto")

module.exports = {
    async validateId(req, res, next){
        const { id } = req.params;

        if(!isUuid(id)){
            return res.status(400).json({
                error: "Invalid ID."
            });
        }

        try{
            const produto = await Produto.findById(id);
            res.produto = produto;
            
            if(!produto){
                return res.status(404).json({
                    error: "Produto not found."
                })
            }
            
        } catch{
            return res.status(500).json({
                error: err.message
            });
        }

        next();
    }
}

