import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/product-list';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import { ADD_TO_CART, addToCartAC } from '../actions';
import Footer from '../components/footer';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const cartItems = useSelector((state) => state.cart.items);

	const addToCart = (product) => {
		dispatch(addToCartAC(product));
	};

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<Carousel />
			<ProductList products={products} addToCart={addToCart} />
			<Footer />
		</>
	);
};

export default Home;
