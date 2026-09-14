const router = require('express').Router();
const { authMiddleware } = require('../../middlewares/authMiddleware');
const categoryController = require('../../controllers/dashboard/categoryController');

// Ensure the endpoint path matches '/category-get'
router.get('/category-get', authMiddleware, categoryController.get_category);

module.exports = router;