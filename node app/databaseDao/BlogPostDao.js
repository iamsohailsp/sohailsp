const { execute } = require("../config/database/querywrapperMysql");
const fs = require('fs')
const streamifier = require('streamifier')
const uploadToBlobContainer = require('../public/uploadToBlobContainer')

class BlogPostDAO {
  // api function for post a blog
  async addblog(payload, image) {
    try {
      const fileName = `blog_images/${image.originalname}`;
      let uploadResult;
      try {
        uploadResult = await uploadToBlobContainer(fileName, image.buffer);
      } catch (uploadError) {
        // Handle the Azure Blob Storage upload error
        return false;
      }
      const { title, description, publishedBy, is_active, category, subCategory } = payload;
      let publishedDate = new Date().toLocaleDateString()
      const query = `
        INSERT INTO icashiq.blog_post(title, image, description, published_by, published_date, is_active, blog_category_id, subCategory_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const result = await execute(query, [title, uploadResult, description, publishedBy, publishedDate, is_active, category, subCategory]);
      if (result.affectedRows > 0) {
        return true; // Indicate that the survey was successfully added
      } else {
        return false; // Indicate that the survey was not added
      }
    } catch (error) {
      return error;
    }
  }
  // api function for createAffilation
  async createAffilation(payload, image) {
    try {
      const fileName = `blog_images/${image.originalname}`;
      let uploadResult;
      try {
        uploadResult = await uploadToBlobContainer(fileName, image.buffer);
      } catch (uploadError) {
        // Handle the Azure Blob Storage upload error
        return false;
      }  
      const { panelName, description, link, is_active, createdAt } = payload;
      let publishedDate = new Date().toLocaleDateString()
      const query = `
        INSERT INTO icashiq.affiliation(panelName, description, link, is_active, createdAt)
        VALUES (?, ?, ?, ?, ?)
      `;

      const result = await execute(query, [panelName, description, link, is_active, new Date()]);
      if (result.affectedRows > 0) {
        return true; // Indicate that the survey was successfully added
      } else {
        return false; // Indicate that the survey was not added
      }
    } catch (error) {
      return error;
    }
  }
  // api function for update blog

  async updateBlog(payload, image) {
    try {
      let fileName = ''
      if (image) { 
        fileName = `blog_images/${image.originalname}`;
       }
      let uploadResult;
      try {
        if (image) { 
          uploadResult = await uploadToBlobContainer(fileName, image.buffer); 
        }
      } catch (uploadError) {
        // Handle the Azure Blob Storage upload error
        return false;
      }
      const { id, title, description, publishedBy, is_active } = payload;
      let publishedDate = new Date().toLocaleDateString()
      let result = ''
      if (image) {
        const updateQuery = `
          UPDATE icashiq.blog_post
          SET title = ?, image = ?, description = ?, published_by = ?, published_date = ?, is_active = ?
          WHERE id = ?
        `;
        result = await execute(updateQuery, [title, uploadResult, description, publishedBy, publishedDate, is_active, id]);
      } else {
        const updateQuery = `
            UPDATE icashiq.blog_post
            SET title = ?,  description = ?, published_by = ?, published_date = ?, is_active = ?
            WHERE id = ?
          `;
        result = await execute(updateQuery, [title, description, publishedBy, publishedDate, is_active, id]);
      }
      if (result.affectedRows > 0) {
        return true; // Indicate that the survey was successfully updated
      } else {
        return false; // Indicate that the survey was not updated
      }
    } catch (error) {
      throw error;
    }
  }

  // api function for get a blog

  async getblog(payload) {
    try {
      const limit = payload.limit;
      const page = payload.page;
      const { id } = payload;
      const offset = (page - 1) * limit;

      const query = `
        SELECT * FROM icashiq.blog_post where is_active = ? order by id desc
        LIMIT ? OFFSET ?;
  
        SELECT COUNT(id) as totalCount FROM icashiq.blog_post where is_active = 1;
      `;

      const [results, countResult] = await execute(query, [1, limit, offset]);
      if (results && countResult.length > 0) {
        const totalCount = countResult[0].totalCount;
        return { data: results, totalCount };
      } else {
        return { data: [], totalCount: 0 };
      }
    } catch (error) {
      throw error;
    }
  }

  async adminGetblog(payload) {
    try {
      const limit = payload.limit;
      const page = payload.page;
      const { id } = payload;
      const offset = (page - 1) * limit;

      const query = `
        SELECT * FROM icashiq.blog_post order by id desc
        ;
  
        SELECT COUNT(id) as totalCount FROM icashiq.blog_post;
      `;

      const [results, countResult] = await execute(query, [limit, offset]);
      if (results && countResult.length > 0) {
        const totalCount = countResult[0].totalCount;
        return { data: results, totalCount };
      } else {
        return { data: [], totalCount: 0 };
      }
    } catch (error) {
      throw error;
    }
  }

  async getDetailBlog(id) {
    try {
      const query = `
        SELECT * FROM icashiq.blog_post WHERE id=?`;

      const result = await execute(query, [id]);
      if (result) {
        return { data: result };
      } else {
        return { data: [] };
      }
    } catch (error) {
      throw error;
    }
  }






}

module.exports = new BlogPostDAO();
