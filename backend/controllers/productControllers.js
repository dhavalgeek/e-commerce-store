const { request } = require('express');
const Product = require('../models/productModel');

const createProduct = async (req, res) => {
	const productToAdd = {
		name: 'Sony WX-5',
		category: 'Headphones',
		price: 100.75,
		rating: 3,
		color: 'black',
		size: 'S',
		details: {
			product: 'productDetails',
			warranty: 'warrantyDetails',
			merchant: 'merchantDetails'
		},
		image: 'product-1-square',
		images: ['product-1', 'product-1-2', 'product-1-3']
	};

	try {
		const newProduct = await new Product(req.body /*productToAdd*/);
		await newProduct.save();

		return res.status(200).json({
			message: 'Product created successfully..',
			data: newProduct
		});
	} catch (error) {
		console.error('Error while creating the product: ', error);
		return res.status(500).json({
			message: error.message
		});
	}
};

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		return res.status(200).json({
			totalProducts: products.length,
			data: products
		});
	} catch (error) {
		console.log('Error while fetching the products: ', error);
		return res.status(500).json({
			message: error.message
		});
	}
};

module.exports = { createProduct, getProducts };
