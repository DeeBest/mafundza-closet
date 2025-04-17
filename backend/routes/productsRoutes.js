const router = require('express').Router();

const {
  getAllProducts,
  addProduct,
} = require('../controllers/productsController');

router.get('/getAllProducts', getAllProducts);
router.post('/addProduct', addProduct);

module.exports = router;
