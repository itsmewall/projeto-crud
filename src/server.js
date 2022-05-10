const express = require('express')
const path = require('path')
const db = require('./database')

const app = express()

//conexão com o banco de dados
db.connect()

//definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post 
app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título Teste'
    })
})

// 404 error (not found)
app.use((req, res) => { //middleware
res.send('Página não encontrada!')    
})

//exportando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))