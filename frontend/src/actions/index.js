import axios from 'axios';

export const CHANGE_ITEM_IN_CART = 'CHANGE_ITEM_IN_CART';
export const CHANGE_ORDER_CART = 'CHANGE_ORDER_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_SHIP_ADDRESS = 'SET_SHIP_ADDRESS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_PRODUCTS = 'INIT_PRODUCTS';
export const INIT_CART = 'INIT_CART';

const changeCart = async (dispatch, product) => {
	let products = [];
	try {
		const response = await axios.post('http://localhost:8080/cart', { item: product });
		products = response.data.data;
	} catch (error) {
		console.error(error);
	}
	
	dispatch({ type: CHANGE_ITEM_IN_CART, payload: products });
}

export const initializeProductsAC = () => {
	return async function (dispatch) {
		let products = [];
		try {
			const response = await axios.get('http://localhost:8080/product');
			products = response.data.data
		} catch (error) {
			console.error(error);
		}
		
		dispatch({ type: INIT_PRODUCTS, payload: products });
	};
};

export const initializeCartAC = () => {
	return async function (dispatch) {
		let cart = [];
		try {
			const response = await axios.get('http://localhost:8080/cart');
			cart = response.data.data;
		} catch (error) {
			console.error(error);
		}
		
		dispatch({ type: CHANGE_ITEM_IN_CART, payload: cart });
	};
};

export const addToCartAC = (product) => {
	return async function (dispatch) {
		changeCart(dispatch, product);
	};
	// dispatch(addToCartAC(product));
};

export const changeOrderWithCart = (cartItems) => {
	return function (dispatch) {
		dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });
	};
};

export const changeQuantityAC = (quantity, item) => {
	return async function (dispatch) {
		await changeCart(dispatch, { ...item, quantity });
		// dispatch({ type: CHANGE_QUANTITY, payload: { ...item, quantity } });
	};
};

export const addAddressAC = (address) => {
	return function (dispatch) {
		dispatch({ type: ADD_ADDRESS, payload: address });
	};
};

export const setShipAddressAC = (address) => {
	return function (dispatch) {
		dispatch({ type: SET_SHIP_ADDRESS, payload: address });
	};
};

export const placeOrderAC = (order) => {
	return function (dispatch) {
		dispatch({ type: PLACE_ORDER, payload: order });
	};
};

export const emptyCartAC = () => {
	return function (dispatch) {
		dispatch({ type: EMPTY_CART });
	};
};

export const removeItemAC = (item) => {
	return async function (dispatch) {
		let cart = [];
		try {
			const response = await axios.delete('http://localhost:8080/cart/' + item._id);
			cart = response.data.data;
		} catch (error) {
			console.error(error);
		}
		
		dispatch({ type: CHANGE_ITEM_IN_CART, payload: cart });

		// dispatch({ type: REMOVE_ITEM, payload: item });
	};
};
