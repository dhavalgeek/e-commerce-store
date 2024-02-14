import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Orders from '../components/orders';

const OrdersPage = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);
	const order = useSelector((state) => state.order);
	const user = useSelector((state) => state.user);

	console.log(order);

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<h2>My Orders</h2>
			{user.orders.map((order, index) => (
				<Orders items={order.items} order={order} key={index} />
			))}
			<Footer />
		</>
	);
};

export default OrdersPage;
