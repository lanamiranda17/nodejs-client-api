import pg from 'pg'
import repository from '../repositories/ClienteRepository.js'

async function getAllClientes(){

    //se tiver regras de negócio inserir aqui
    
    return await repository.getAllClientes()


}

async function getCliente (cpf) {
    return await repository.getCliente(cpf)
}


async function createCliente (cpf, nome, nasc, salario) {
    //regra de negocio: cpf nao pode ser repetido
    // let rows = getCliente(cpf)
    // if (rows){
    //     res.send('Cpf já cadastrado') FINALIZAR
    // }

    return await repository.createCliente(cpf, nome, nasc, salario)
}


async function deleteCliente (cpf) {
  return await repository.deleteCliente(cpf)
}

async function updateCliente(cpfVelho, cpfNovo, nome, nasc, salario) {
    //validar se existe

    //alterar
    return await repository.updateCliente(cpfVelho, cpfNovo, nome, nasc, salario)
}


export default {getAllClientes, getCliente, createCliente, updateCliente, deleteCliente}