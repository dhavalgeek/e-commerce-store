import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductDetails from '../components/product-details';
import { useParams } from 'react-router-dom';
import { CHANGE_ITEM_IN_CART, addToCartAC } from '../actions';

const ProductDetailsPage = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	const cartItems = useSelector((state) => state.cart.items);
	const products = useSelector((state) => state.product.products);
	const product = products.find((p) => p._id === id);

	const addToCart = (product) => {
		dispatch(addToCartAC(product));
		// dispatch({ type: CHANGE_ITEM_IN_CART, payload: product });
	};

	return (
		<>
			<Navbar cartCount={cartItems.length} />
			<ProductDetails product={product} addToCart={addToCart} />
			<Footer />
		</>
	);
};

export default ProductDetailsPage;
