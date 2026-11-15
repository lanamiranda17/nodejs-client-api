import pg from 'pg'
function conectar (){

    if (global.connection){
        return global.connection.connect()
    }

    var conn = new pg.Pool(
        {
            user: 'postgres',
            host: 'localhost',
            database: 'Teste',
            password:'2022#estudante',
            port: 5432
        }
    )
    global.connection = conn
    return conn.connect()
}
export default {conectar}