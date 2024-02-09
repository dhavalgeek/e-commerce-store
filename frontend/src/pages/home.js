import { useSelector } from 'react-redux';
import ProductList from '../components/product-list';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';

const Home = () => {
	const products = useSelector((state) => state.product.products);

	return (
		<>
			<Navbar cartCount={3} />
				<Carousel />
			<ProductList products={products} />
		</>
	);
};

export default Home;
