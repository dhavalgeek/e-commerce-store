import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Orders from '../components/orders';

const OrdersPage = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const user = useSelector((state) => state.user);
	const sortedOrder = [...user.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<h2>My Orders</h2>
			{sortedOrder.map((order, index) => (
				<Orders items={order.items} order={order} key={index} />
			))}
			<Footer />
		</>
	);
};

export default OrdersPage;
