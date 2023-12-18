const { execute } = require("../config/database/querywrapperMysql");

class AdminLoginDAO {
    async adminlogin(payload){
        try{
            const {userName, password} = payload;
            let query = `SELECT * FROM icashiq.icashiq_users WHERE username = ? AND is_Admin = ? AND password = ? LIMIT 1`;

            let result = await execute(query, [userName, 1, password])
            if (result.length === 1) {
                query = 'update icashiq.icashiq_users set is_active = ? where username = ?'
                result = await execute(query, [1, userName])
                return true;
            } else {
                return false;
            }            
        }catch (error) {
            throw error;
          }
    }
}


module.exports = new AdminLoginDAO();