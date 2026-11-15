import express from 'express'
import clienteRouter from './routes/ClienteRoute.js'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.use(express.json()) //converte a requisição em JSON
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('view'))

app.use("/cliente", clienteRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
