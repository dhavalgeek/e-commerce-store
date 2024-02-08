import './App.css';
import ProductList from './components/product-list';
import db from './database';

function App() {
	return (
		<ProductList products={db.products} />
	);
}

export default App;
