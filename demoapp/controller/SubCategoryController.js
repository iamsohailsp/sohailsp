const { message } = require("../helper/message");
const SubCategoryServices = require("../services/SubCategoryService")

class SubCategoryController{
    async createSubCategory(req, res){
        try {
            const result = await SubCategoryServices.addSubCategoryService(req.body);
            return (result.status === 201)?res.status(201).json({success:true, message:message.CATEGORY_ADDED}):res.status(400).json({success:false, message:message.NOT_FOUND})
        } catch (error) {
            res.status(500).json({success:false, message:message.SERVER_ERROR})
        }
    }
    async getSubCategoryController(req, res){
        try {
            const result = await SubCategoryServices.getSubCategoryService(req.body);
            return (result)?res.status(201).json({success:true, message:message.FETCHING_DATA, data:result}):res.status(204).json({success:false, message:message.NOT_FOUND, data:[]})
        } catch (error) {
            throw error;
        }
    }
    async updateSubCategory(req, res){
        try {
            const result = await SubCategoryServices.updateSubCategoryService(req.body);
            return (result.status === 201)?res.status(201).json({success:true, message:message.CATEGORY_UPDATED}):res.status(204).json({success:false, message:message.NOT_FOUND})
        } catch (error) {
            res.status(500).json({success:false, message:message.SERVER_ERROR})
        }
    }
}

module.exports = new SubCategoryController();