const SubCategoryDao = require("../databaseDao/SubCategoryDao");

class SubCategoryService{
    async addSubCategoryService(queryData){
        try {
            const result = await SubCategoryDao.addSubCategory(queryData);
            return result? {status:201,success:true}:{status:400, success:false}
            
        } catch (error) {
            console.log(error);
        }
    }
    async getSubCategoryService(){
        try {
            const result = await SubCategoryDao.getSubCategoryDao()
            return (result)?result:[];
        } catch (error) {
            throw error
        }
    }
    async updateSubCategoryService(queryData){
        try {
            const result = await SubCategoryDao.updateSubCategory(queryData);
            return result? {status:201,success:true}:{status:400, success:false}
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SubCategoryService();