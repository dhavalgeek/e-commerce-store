import {
	ADD_ADDRESS,
	CHANGE_ITEM_IN_CART,
	CHANGE_ORDER_CART,
	CHANGE_QUANTITY,
	EMPTY_CART,
	INIT_CART,
	INIT_PRODUCTS,
	INIT_USER,
	PLACE_ORDER,
	REMOVE_ITEM,
	SET_SHIP_ADDRESS
} from '../actions';

const initialStateProduct = {
	products: []
};

const initialStateCart = {
	items: []
};

const initialStateOrder = {
	items: [],
	shipping_charge: 50,
	discount_in_percent: 10,
	shipping_address: '',
	total_items: 0,
	total_cost: 0
};

const initialStateUser = {
	name: 'John',
	email: 'john@mail.com',
	addresses: [
		// {
		// 	first_name: 'John',
		// 	last_name: 'Doe',
		// 	address1: 'ABCD',
		// 	address2: 'XYZ',
		// 	country: 'India',
		// 	state: 'Gujarat',
		// 	pin_code: 100101,
		// 	phone: '+91 0987654321'
		// },
		// {
		// 	first_name: 'John',
		// 	last_name: 'SMITH',
		// 	address1: 'DEFG',
		// 	address2: 'XYZ',
		// 	country: 'India',
		// 	state: 'Gujarat',
		// 	pin_code: 700707,
		// 	phone: '+91 1234567890'
		// }
	],
	orders: []
};

const productReducer = (state = initialStateProduct, action) => {
	switch (action.type) {
		case INIT_PRODUCTS:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};

const cartReducer = (state = initialStateCart, action) => {
	switch (action.type) {
		case INIT_CART:
			return {
				...state,
				items: action.payload.items,
				userId: action.payload.userId
			};
		case CHANGE_ITEM_IN_CART:
			// if (state.items.find((item) => item._id === action.payload._id)) {
			// 	return state;
			// }
			return {
				...state,
				items: action.payload.items
			};
		// case INIT_CART:
		// 	return {
		// 		...state,
		// 		items: action.payload.items
		// 	};
		// case CHANGE_QUANTITY:
		// 	const oldItem = state.items.find(
		// 		(item) => item._id === action.payload._id
		// 	);
		// 	const index = state.items.indexOf(oldItem);
		// 	const newItems = [...state.items];
		// 	newItems[index] = action.payload;

		// 	return { ...state, items: newItems };
		case REMOVE_ITEM:
			const item = action.payload;
			const rIndex = state.items.findIndex((el) => el._id === item._id);
			const itemsArray = [...state.items];
			itemsArray.splice(rIndex, 1);

			return { ...state, items: itemsArray };
		// case EMPTY_CART:
		// 	return initialStateCart;
		default:
			return state;
	}
};

const orderReducer = (state = initialStateOrder, action) => {
	switch (action.type) {
		case CHANGE_ORDER_CART:
			const items = action.payload;
			const total_items = items.reduce(
				(total, item) => total + +item.quantity,
				0
			);
			const total_cost = items.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			return {
				...state,
				items: action.payload,
				total_items,
				total_cost
			};
		case SET_SHIP_ADDRESS:
			return { ...state, shipping_address: action.payload };
		default:
			return state;
	}
};

const userReducer = (state = initialStateUser, action) => {
	switch (action.type) {
		case INIT_USER:
			return action.payload;
		case ADD_ADDRESS:
			return {
				...state,
				addresses: [...state.addresses, action.payload]
			};
		case PLACE_ORDER:
			return {
				...state,
				orders: [...state.orders, action.payload]
			};
		default:
			return state;
	}
};

export { productReducer, cartReducer, orderReducer, userReducer };
