import 'dotenv/config'
import pg from 'pg'
function conectar (){

    if (global.connection){
        return global.connection.connect()
    }

    var conn = new pg.Pool(
        {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        }
    )
    global.connection = conn
    return conn.connect()
}
export default {conectar}