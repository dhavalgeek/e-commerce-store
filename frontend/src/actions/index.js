import axios from 'axios';
axios.defaults.withCredentials = true;

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
export const INIT_USER = 'INIT_USER';

const changeCart = async (dispatch, product) => {
	let products = [];
	try {
		const response = await axios.post('http://localhost:8080/cart', {
			item: product
		});
		products = response.data.data;
	} catch (error) {
		console.error(error);
	}

	dispatch({ type: CHANGE_ITEM_IN_CART, payload: products });
};

export const checkAuthAC = (navigate) => {
	return async function (dispatch) {
		try {
			const response = await axios.get('http://localhost:8080/user');
			const userResponse = response.data.data;
			dispatch({ type: INIT_USER, payload: userResponse });
			dispatch(initializeCartAC(userResponse._id));
			navigate('/');
		} catch (error) {
			console.error(error);
			alert(error.message);
			navigate('/login');
		}
	};
};

export const loginAC = (user, navigate) => {
	return async function (dispatch) {
		try {
			const response = await axios.post('http://localhost:8080/user/login', { user });
			const userResponse = response.data.data;
			dispatch({ type: INIT_USER, payload: userResponse });
			dispatch(initializeCartAC(userResponse._id));
			navigate('/');
		} catch (error) {
			console.error(error);
			alert(error.message);
		}
	};
};

export const signupAC = (user, navigate) => {
	return async function (dispatch) {
		try {
			const response = await axios.post('http://localhost:8080/user/signup', { user });
			const userResponse = response.data.data;
			dispatch({ type: INIT_USER, payload: userResponse });
			dispatch(initializeCartAC(userResponse._id));
			navigate('/');
		} catch (error) {
			console.error(error);
			alert(error.message);
		}
	};
};

export const logoutAC = (navigate) => {
	return async function (dispatch) {
		try {
			await axios.get('http://localhost:8080/user/logout');
			dispatch({ type: INIT_USER, payload: {} });
			navigate('/login');
		} catch (error) {
			console.error(error);
			alert(error.message);
		}
	};
};

export const initializeProductsAC = () => {
	return async function (dispatch) {
		let products = [];
		try {
			const response = await axios.get('http://localhost:8080/product');
			products = response.data.data;
		} catch (error) {
			console.error(error);
		}

		dispatch({ type: INIT_PRODUCTS, payload: products });
	};
};

export const initializeCartAC = (userId) => {
	return async function (dispatch) {
		let cart = [];
		try {
			const response = await axios.get('http://localhost:8080/cart');
			cart = response.data.data;
		} catch (error) {
			console.error(error);
		}

		dispatch({ type: INIT_CART, payload: { items: cart.items, userId } });
	};
};

// export const initializeUserAC = () => {
// 	return async function (dispatch) {
// 		let user = [];
// 		try {
// 			const response = await axios.get('http://localhost:8080/user');
// 			user = response.data.data;
// 		} catch (error) {
// 			console.error(error);
// 		}

// 		dispatch({ type: INIT_USER, payload: user });
// 		dispatch(initializeCartAC());
// 	};
// };

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
	return async function (dispatch) {
		let response = {};
		try {
			const addAddress = await axios.put('http://localhost:8080/user/address', {
				address
			});

			response = addAddress.data.data;
		} catch (error) {
			console.error(error);
		}

		dispatch({ type: ADD_ADDRESS, payload: response });
	};
};

export const setShipAddressAC = (address) => {
	return function (dispatch) {
		dispatch({ type: SET_SHIP_ADDRESS, payload: address });
	};
};

export const placeOrderAC = (order, navigate) => {
	return async function (dispatch) {
		try {
			const userOrders = await axios.post('http://localhost:8080/order', {
				order
			});

			const response = userOrders.data.data;
			dispatch({ type: PLACE_ORDER, payload: response });
			navigate(`/order-success/${response._id}`);
		} catch (error) {
			console.error(error);
		}
	};
};

export const emptyCartAC = () => {
	return async function (dispatch) {
		let cart = [];
		try {
			const response = await axios.delete('http://localhost:8080/cart/clear');
			cart = response.data.data;
		} catch (error) {
			console.error(error);
		}

		dispatch({ type: CHANGE_ITEM_IN_CART, payload: cart });
		// dispatch({ type: EMPTY_CART });
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
