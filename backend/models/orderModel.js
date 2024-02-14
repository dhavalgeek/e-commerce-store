const express = require('express');
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	items: [Object],
	shipping_charge: Number,
	discount_in_percent: Number,
	shipping_address: Object,
	total_items: Number,
	total_cost: Number
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
