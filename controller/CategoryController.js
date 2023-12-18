const { message } = require("../helper/message");
const CategoryServices = require("../services/CategoryService")

class CategoryController{
    async createCategory(req, res){
        try {
            const result = await CategoryServices.addCategoryService(req.body);
            return (result.status === 201)?res.status(201).json({success:true, message:message.CATEGORY_ADDED}):res.status(400).json({success:false, message:message.NOT_FOUND})
        } catch (error) {
            res.status(500).json({success:false, message:message.SERVER_ERROR})
        }
    }
    async getCategoryController(req, res){
        try {
            const result = await CategoryServices.getCategoryService(req.body);
            return (result)?res.status(201).json({success:true, message:message.FETCHING_DATA, data:result}):res.status(400).json({success:false, message:message.NOT_FOUND, data:[]})
        } catch (error) {
            throw error;
        }
    }
    async updateCategory(req, res){
        try {
            const result = await CategoryServices.updateCategoryService(req.body);
            return (result.status === 201)?res.status(201).json({success:true, message:message.CATEGORY_UPDATED}):res.status(400).json({success:false, message:message.NOT_FOUND})
        } catch (error) {
            res.status(500).json({success:false, message:message.SERVER_ERROR})
        }
    }
}

module.exports = new CategoryController();