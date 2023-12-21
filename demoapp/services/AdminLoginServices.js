const { AdminLoginDAO } = require('../databaseDao')


class AdminLoginService{
    async adminlogin(queryData){
        try {
            const result = await AdminLoginDAO.adminlogin(queryData);
            if(result == true){
                return { status: 200, success: true };
               }else{
                return { status: 400, success: false };
               }
        } catch (error) {
            return error;
        }
    }
}
module.exports=new AdminLoginService();