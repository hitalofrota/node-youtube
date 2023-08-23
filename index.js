const express = require ('express');

//Essa variável app vai remeter a tudo relacionado ao express.
const app = express();

app.get('/', (request, response) =>{
    response.send('Hello World')
})

app.get('/contact/:id', (request, response) => {
    const params = request.params.id

    console.log('Seus parâmetros são:', params)
})

app.get('/sobre', (request, response) => {
    response.send("Você está na página Sobre")
})


const port = 8081
//Meu servidor irá rodar nesta porta.
//Não pode ter nada abaixo dessa função, por que se o seu servidor não vai rodar
app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})
