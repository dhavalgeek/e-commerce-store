import {
	ADD_ADDRESS,
	ADD_TO_CART,
	CHANGE_ORDER_CART,
	CHANGE_QUANTITY,
	EMPTY_CART,
	PLACE_ORDER,
	REMOVE_ITEM,
	SET_SHIP_ADDRESS
} from '../actions';

const initialStateProduct = {
	products: [
		{
			id: 1,
			name: 'Sony WX-5',
			category: 'Headphones',
			price: 100.75,
			rating: 3,
			color: 'black',
			size: 'S',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-1-square',
			images: ['product-1', 'product-1-2', 'product-1-3']
		},
		{
			id: 2,
			name: 'Apple Watch 2',
			category: 'SmartWatch',
			price: 500.75,
			rating: 4,
			color: 'red',
			size: '',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-2-square',
			images: ['product-2', 'product-2-2', 'product-2-3']
		},
		{
			id: 3,
			name: 'Canon WM-5',
			category: 'Camera',
			price: 300.75,
			rating: 5,
			color: 'green',
			size: '',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-3-square',
			images: ['product-3', 'product-3-2', 'product-3-3']
		}
	]
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
		{
			first_name: 'John',
			last_name: 'Doe',
			address1: 'ABCD',
			address2: 'XYZ',
			country: 'India',
			state: 'Gujarat',
			pin_code: 100101,
			phone: '+91 0987654321'
		},
		{
			first_name: 'John',
			last_name: 'SMITH',
			address1: 'DEFG',
			address2: 'XYZ',
			country: 'India',
			state: 'Gujarat',
			pin_code: 700707,
			phone: '+91 1234567890'
		}
	],
	orders: []
};

const productReducer = (state = initialStateProduct, action) => {
	return state;
};

const cartReducer = (state = initialStateCart, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			if (state.items.find((item) => item.id === action.payload.id)) {
				return state;
			}
			return {
				...state,
				items: [...state.items, { ...action.payload, quantity: 1 }]
			};
		case CHANGE_QUANTITY:
			const oldItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			const index = state.items.indexOf(oldItem);
			const newItems = [...state.items];
			newItems[index] = action.payload;

			return { ...state, items: newItems };
		case REMOVE_ITEM:
			const item = action.payload;
			const rIndex = state.items.findIndex((el) => el.id === item.id);
			const itemsArray = [...state.items];
			itemsArray.splice(rIndex, 1);

			return { ...state, items: itemsArray };
		case EMPTY_CART:
			return initialStateCart;
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
