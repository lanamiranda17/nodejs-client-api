import pg from 'pg'
import ClienteServices from '../services/ClienteServices.js';

async function getAllClientes(req, res){
    try{
        res.send(await ClienteServices.getAllClientes())
    }
    catch (err){
        console.log(err)
    }
    
}

async function getCliente (req, res) {
    //pegar as variaveis
    let cpf = req.params.cpf;

    //validar as variaveis
    

    //chamar e retornar service
    res.send(await ClienteServices.getCliente(cpf))
}


async function createCliente (req, res) {
    let cpf = req.body.cpf
    let nome = req.body.nome
    let nasc = req.body.nasc
    let salario = req.body.salario

    //validar
    if (!cpf || !nome){
        res.send("CPf e nome são obrigatorios")
    }
    else {
        res.send(await ClienteServices.createCliente(cpf, nome, nasc, salario))
    }
}


async function deleteCliente (req, res) {
    let cpf = req.params.cpf
    res.send(await ClienteServices.deleteCliente(cpf))
}

async function updateCliente(req, res) {
    //pegar cpf da rota
    let cpfVelho = req.params.cpf

    //pegar novos dados
    let cpfNovo = req.body.cpf
    let nome = req.body.nome
    let nasc = req.body.nasc
    let salario = req.body.salario

    res.send(await ClienteServices.updateCliente(cpfVelho, cpfNovo, nome, nasc, salario))
  
}

export default {getAllClientes, getCliente, createCliente, updateCliente, deleteCliente}