const { execute } = require("../config/database/querywrapperMysql")

class SubCategoryDao{
    async addSubCategory(payload){
        try {
            const {name, is_active} = payload
            const query = `INSERT INTO icashiq.blog_sub_category(sub_category_name, is_active)VALUES(?,?)`
            const result = await execute(query,[name,is_active])
            return (result.affectedRows > 0)? true : false ;
        } catch (error) {
            console.log(error)
        }
    }
    async getSubCategoryDao(){
        try {
            const query = `SELECT * FROM icashiq.blog_sub_category`;
            const result = await execute(query,[])
            return result?{data:result}:{data:[]}
        } catch (error) {
            throw error;
        }
    }
    async updateSubCategory(payload){
        try {
            const {id, name, is_active} = payload
            const query = `UPDATE icashiq.blog_sub_category SET sub_category_name = ?, is_active = ? where id = ?`;
            const result = await execute(query,[name, is_active, id])
            return (result.affectedRows > 0)? true : false ;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new SubCategoryDao();