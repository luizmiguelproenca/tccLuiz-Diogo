const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL

// função que faz a conexão com o Banco de Dados
function connectToDatabase(){
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    
    db.on("error", (error) => {
        console.error(error);
    })
    
    db.once("open", () => {
        console.log("🛢 Conectado ao MongoDB com sucesso!");
    })
}


module.exports  = connectToDatabase;