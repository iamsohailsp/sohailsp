const express = require("express");
const router = express.Router();
const { BlogPostController, AdminLoginController } = require('../controller');
const multer = require("multer");
const CategoryController = require("../controller/CategoryController");
const SubCategoryController = require("../controller/SubCategoryController");


const storage = multer.memoryStorage();

storage._handleFile = function _handleFile(req, file, cb) {
  const chunks = [];
  
  file.stream.on('data', (chunk) => {
    chunks.push(chunk);
  });

  file.stream.on('end', () => {
    const data = Buffer.concat(chunks);
    cb(null, {
      buffer: data,
      size: data.length,
    });
  });
};

const upload = multer({ storage: storage });

router.post('/api/add-blog', upload.single('image'), BlogPostController.addBlog);
router.get('/api/get-blog',BlogPostController.getBlog);
router.post('/api/admin-login', AdminLoginController.adminLogin);
router.post('/api/update-blog', upload.single('image'), BlogPostController.updateBlog);
router.get(`/api/post-detail`, BlogPostController.getDetailBlog);
router.post('/api/category', CategoryController.createCategory);
router.get('/api/category', CategoryController.getCategoryController);
router.patch('/api/category', CategoryController.updateCategory);
router.post('/api/sub-category', SubCategoryController.createSubCategory);
router.get('/api/sub-category', SubCategoryController.getSubCategoryController);
router.patch('/api/sub-category', SubCategoryController.updateSubCategory);
router.get('/api/admin-getBlog', BlogPostController.getAdminBlog);
router.post('/api/admin-createAffilation', upload.single('image'),BlogPostController.createAffilation);


module.exports =router