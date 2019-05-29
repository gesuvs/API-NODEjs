import mssql, { NText } from 'mssql';
import keys from './keys';

const pool = new mssql.ConnectionPool(keys, err => {
    if (err) {
        console.error("Connection failed", err);
        throw err
    } else {
        console.log("Conectado")
    };
})

pool.on('release', () => console.log('pool => conexao retornada'));
pool.on('SIGINT', () =>
    pool.close(err => {
        if (err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
);
// const pool = new Banco();

export default pool;