const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.route('/')
    .get(productsController.getAllProducts)

module.exports = router;