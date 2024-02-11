import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect } from 'react';
import {
	ADD_ADDRESS,
	EMPTY_CART,
	PLACE_ORDER,
	SET_SHIP_ADDRESS,
	addAddressAC,
	emptyCartAC,
	placeOrderAC,
	setShipAddressAC
} from '../actions';
import Checkout from '../components/checkout';

const CheckoutPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const order = useSelector((state) => state.order);
	const user = useSelector((state) => state.user);

	const addAddress = (address) => {
		dispatch(addAddressAC(address));
	};

	const setShipAddress = (address) => {
		dispatch(setShipAddressAC(address));
	};

	const placeOrder = () => {
		if (order.shipping_address) {
			dispatch(placeOrderAC(order));
			dispatch(emptyCartAC());
		} else {
			alert('Please select a shipping address');
		}
	};

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<Checkout
				order={order}
				user={user}
				addAddress={addAddress}
				setShipAddress={setShipAddress}
				placeOrder={placeOrder}
			/>
			<Footer />
		</>
	);
};

export default CheckoutPage;
