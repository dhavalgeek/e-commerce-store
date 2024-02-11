import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Cart from '../components/cart';
import Footer from '../components/footer';
import { useEffect } from 'react';
import {
	CHANGE_ORDER_CART,
	CHANGE_QUANTITY,
	REMOVE_ITEM,
	changeOrderWithCart,
	changeQuantityAC,
	removeItemAC
} from '../actions';

const CartPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const order = useSelector((state) => state.order);

	useEffect(() => {
		dispatch(changeOrderWithCart(cartItems));
	}, [cartItems]);

	const changeQuantity = (quantity, item) => {
		dispatch(changeQuantityAC(quantity, item));
	};

	const removeItem = (item) => {
		dispatch(removeItemAC(item));
	};

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<Cart
				items={cartItems}
				order={order}
				changeQuantity={changeQuantity}
				removeItem={removeItem}
			/>
			<Footer />
		</>
	);
};

export default CartPage;
