const { BlogPostDao}=require('../databaseDao')


class BlogPostService{
  async addblogService(queryData, image) {
    try {
      const result = await BlogPostDao.addblog(queryData, image);
      
      if (result) {
        return { status: 200, success: true };
      } else {
        return { status: 400, success: false };
      }
    } catch (error) {
      return { status: 500, success: false, error };
    }
  }
  async createAffilationService(queryData, image) {
    try {
      const result = await BlogPostDao.createAffilation(queryData, image);
      
      if (result) {
        return { status: 200, success: true };
      } else {
        return { status: 400, success: false };
      }
    } catch (error) {
      return { status: 500, success: false, error };
    }
  }
  async updateBlogService(queryData, image) {
    try {
      const result = await BlogPostDao.updateBlog(queryData, image);
      
      if (result) {
        return { status: 200, success: true };
      } else {
        return { status: 400, success: false };
      }
    } catch (error) {
      return { status: 500, success: false, error };
    }
  }
    async getblogService(queryData) {
        try {
          const result = await  BlogPostDao.getblog(queryData);
          if (result) {
            return result;
          } else {
            throw new Error('No survey data found.');
          }
        } catch (error) {
          throw error;
        }
      }
      async getAdminBlogService(queryData) {
        try {
          const result = await  BlogPostDao.adminGetblog(queryData);
          if (result) {
            return result;
          } else {
            throw new Error('No survey data found.');
          }
        } catch (error) {
          throw error;
        }
      }


      async getDetailblogService(id) {
        try {
          const result = await  BlogPostDao.getDetailBlog(id);
          if (result) {
            return result;
          } else {
            throw new Error('Data Not found.');
          }
        } catch (error) {
          throw error;
        }
      }
      
}
module.exports=new BlogPostService();