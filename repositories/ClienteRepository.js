import BD from './bd.js'

async function getAllClientes(){

    let conn = await BD.conectar()

    var sql = "select * from cliente"
    try{
        var query = await conn.query(sql)
        return query.rows
    }
    catch (err){
        console.log(err)
    }
    finally {
        conn.release()
    }

}

async function getCliente (cpf) {
    let conn = await BD.conectar()

    var sql = "select * from cliente where cpf = $1"
    try{
        var query = await conn.query(sql, [cpf])
        return query.rows
    }
    catch (err){
        console.log(err)
    }
    finally {
        conn.release()
    }
}


async function createCliente (cpf, nome, nasc, salario) {

    let conn = await BD.conectar()

    var sql = "insert into cliente (cpf, nome, nasc, salario) values ($1, $2, $3, $4)  returning *"
    try{
        var query = await conn.query(sql, [cpf, nome, nasc, salario])
        console.log('aqui')
        return query.rows

    }
    catch (err){
        console.log(err)
    }
    finally {
        conn.release()
    }
}


async function deleteCliente (cpf) {
  let conn = await BD.conectar()

    var sql = "delete from cliente where cpf = $1 returning *"
    try{
        var query = await conn.query(sql, [cpf])
        return query.rows
    }
    catch (err){
        console.log(err)
    }
    finally {
        conn.release()
    }
}


async function updateCliente(cpfVelho, cpfNovo, nome, nasc, salario) {
    
    let conn = await BD.conectar()

    var sql = "update cliente set cpf = $2, nome = $3, nasc = $4, salario = $5 where cpf = $1 returning *"
    try{
        var query = await conn.query(sql, [cpfVelho, cpfNovo, nome, nasc, salario])
        return query.rows
    }
    catch (err){
        console.log(err)
    }
    finally {
        conn.release()
    }

}


export default {getAllClientes, getCliente, createCliente, updateCliente, deleteCliente}