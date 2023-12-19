const { BlogPostService } = require('../services');
const {message} = require('../helper/message')

class BlogPostController {
  async addBlog(req, res) {
    try {
      const queryData = req.body;
      const image_file = req.file;
      const result = await BlogPostService.addblogService(queryData,image_file);
      if(result.status === 200){
        res.status(201).json({success:true, message:message.SURVEY_ADDED})
      }else{
        res.status(400).json({success:false, message:message.NOT_FOUND})
      }
    } catch (error) {
      res.status(500).json({ success: false, message:message.SERVER_ERROR });
    }
  }
  async updateBlog(req, res){
    try{
      const bodyData = req.body;
      const image_file = req.file;
      const result = await BlogPostService.updateBlogService(bodyData,image_file);
      if(result.status === 200){
        res.status(200).json({success:true, message:message.SURVEY_UPDATED})
      }else{
        res.status(400).json({success:false, message:message.NOT_FOUND})
      }
    }catch(e){
      res.status(500).json({success:false, message:message.SERVER_ERROR})
    }
  }

  async getBlog(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 8;
      const queryData = req.body;
      const result = await BlogPostService.getblogService({ ...queryData, page, limit });
  
      if (result) {
        // Send a success response with the paginated data
        res.status(200).json({ success: true, message: message.FETCHING_DATA, data: result });
      } else {
        // Send a response indicating that no data was found
        res.status(404).json({ success: false, message: message.NOT_FOUND, data: [] });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: message.SERVER_ERROR, error: error.message });
    }
  }
  async getAdminBlog(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const queryData = req.body;
      const result = await BlogPostService.getAdminBlogService({ ...queryData, page, limit });
  
      if (result) {
        // Send a success response with the paginated data
        res.status(200).json({ success: true, message: message.FETCHING_DATA, data: result });
      } else {
        // Send a response indicating that no data was found
        res.status(404).json({ success: false, message: message.NOT_FOUND, data: [] });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: message.SERVER_ERROR, error: error.message });
    }
  }

  async getDetailBlog(req, res) {
    try {
      const id = req.query.id;
      const result = await BlogPostService.getDetailblogService(id);
  
      if (result) {
        // Send a success response with the paginated data
        res.status(200).json({ success: true, message: message.FETCHING_DATA, data: result });
      } else {
        // Send a response indicating that no data was found
        res.status(404).json({ success: false, message: message.NOT_FOUND, data: [] });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: message.SERVER_ERROR, error: error.message });
    }
  }
  async createAffilation(req, res) {
    try {
      const queryData = req.body;
      const image_file = req.file;
      const result = await BlogPostService.createAffilationService(queryData,image_file);
      if(result.status === 200){
        res.status(201).json({success:true, message:message.SURVEY_ADDED})
      }else{
        res.status(400).json({success:false, message:message.NOT_FOUND})
      }
    } catch (error) {
      res.status(500).json({ success: false, message:message.SERVER_ERROR });
    }
  }
}

module.exports = new BlogPostController();
