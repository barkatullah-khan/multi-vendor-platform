const { authMiddleware } = require('../../middlewares/authMiddleware');
const productController = require('../../controllers/dashboard/productController');
const router = require('express').Router();


router.post('/product-add', authMiddleware, productController.add_product);

module.exports = router;