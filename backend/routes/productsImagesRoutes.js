const router = require('express').Router();
const imageUpload = require('../middleware/imageUpload');
const uploadImage = require('../controllers/productsImagesController');

router.post('/', imageUpload.single('productImage'), uploadImage);

module.exports = router;
