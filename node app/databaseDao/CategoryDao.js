const { execute } = require("../config/database/querywrapperMysql")

class CategoryDao{
    async addCategory(payload){
        try {
            const {category_name, is_Active} = payload
            const query = `INSERT INTO icashiq.blog_category(category_name, is_active)VALUES(?,?)`
            const result = await execute(query,[category_name, is_Active])
            return (result.affectedRows > 0)? true : false ;
        } catch (error) {
            console.log(error)
        }
    }
    async getCategoryDao(){
        try {
            const query = `SELECT * FROM icashiq.blog_category`;
            const result = await execute(query,[])
            return result.length>0?{data:result}:{data:[]}
        } catch (error) {
            throw error;
        }
    }
    async updateCategory(payload){
        try {
            const {id, category_name, is_Active} = payload
            const query = `UPDATE icashiq.blog_category SET category_name = ?, is_active = ? where id = ?`;
            const result = await execute(query,[category_name, is_Active, id])
            return (result.affectedRows > 0)? true : false ;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new CategoryDao();