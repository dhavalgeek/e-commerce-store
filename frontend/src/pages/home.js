import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/product-list';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import {
	CHANGE_ITEM_IN_CART,
	addToCartAC,
	initializeCartAC,
	initializeProductsAC,
	initializeUserAC
} from '../actions';
import Footer from '../components/footer';
import { useEffect } from 'react';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const cartItems = useSelector((state) => state.cart.items);

	const addToCart = (product) => {
		dispatch(addToCartAC(product));
	};

	useEffect(() => {
		dispatch(initializeUserAC());
		dispatch(initializeProductsAC());
		// dispatch(initializeCartAC());
	}, []);

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
