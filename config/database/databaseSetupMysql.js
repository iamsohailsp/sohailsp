const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit : 100,
    host: '208.109.33.187',  // ip address of server running mysql
    port:  "3306",
    user: "rmUser",    // user name to your mysql database
    password: "Trayi@123",
    database: 'kabadijeeproddb', // use the specified database
    multipleStatements: true
});

module.exports = {
    pool    
}

