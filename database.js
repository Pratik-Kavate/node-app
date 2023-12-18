const {createPool} = require('mysql');

const pool = createPool({
    host: 'localhost',
    user:'root',
    password: '',
    database : 'employee',
    connectionLimit: 10
})

module.exports = pool
