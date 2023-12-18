const mysql = require('./databaseSetupMysql');

async function getConnection(){
    return new Promise((resolve, reject) => {
        mysql.pool.getConnection(function (err, connection) {
          if (err) {
            reject(err);
          } else {
            resolve(connection);
          }
        });
      });
}

exports.execute = async function (query, bindValuesArray) {
    return new Promise(async (resolve, reject) => {
        try {
          const connection = await getConnection();
          connection.query(query, bindValuesArray, function (err, result) {
            if (err) {
                connection.release();
                reject(err);
            } else {
                connection.release();
                resolve(result);
            }
          });
        } catch (e) {
            reject(e);
        }
      });    
}

