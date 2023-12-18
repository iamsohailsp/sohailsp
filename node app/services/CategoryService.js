const CategoryDao = require("../databaseDao/CategoryDao");

class CategoryService{
    async addCategoryService(queryData){
        try {
            const result = await CategoryDao.addCategory(queryData);
            return result? {status:201,success:true}:{status:400, success:false}
            
        } catch (error) {
            console.log(error);
        }
    }
    async getCategoryService(){
        try {
            const result = await CategoryDao.getCategoryDao()
            return (result)?result:[];

        } catch (error) {
            throw error
        }
    }
    async updateCategoryService(queryData){
        try {
            const result = await CategoryDao.updateCategory(queryData);
            return result? {status:201,success:true}:{status:400, success:false}
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CategoryService();
