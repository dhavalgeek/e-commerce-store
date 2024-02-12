const express = require('express');
const {
	addCart,
	getCart,
	deleteCart,
	clearCart
} = require('../controllers/cartControllers');
const router = express.Router();

router.post('/', addCart);
router.get('/', getCart);
router.delete('/:id', deleteCart);
router.delete('/clear', clearCart);

module.exports = router;
