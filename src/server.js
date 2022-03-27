require('dotenv').config(); // importação dotenv
const express = require('express')
const connectToDatabase = require('./config/database'); //importação da conexão com o DB
const routes = require('./routes/Produtos') //Importando as rotas

const app = express()
const port = process.env.PORT || 3000

//conexão com o Banco de Dados
connectToDatabase();
// reconhecer o objeto de solicitação(request) de entrada como um objeto JSON
app.use(express.json())
app.use(routes) // Usando as rotas

// Rota de conteúdo público
app.use('/', express.static('public'))

//Definimos a primeira rota do nosso servidor
app.get('/api', (req, res) => {
    res.status(200).json({
        message: "API está funcionando 100%",
        version:  "1.0.0"
    })
})
//Rota para tratar erros 404
app.use((req, res) => {
    res.status(404).json({
        message: `A rota ${req.originalUrl} não existe!`
    })
})




app.listen(port, (req, res) => {
    console.log(`🚀 O servidor está rodando na porta ${port}`);
})