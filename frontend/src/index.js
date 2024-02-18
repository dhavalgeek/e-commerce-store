import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, orderReducer, productReducer, userReducer } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/checkoutPage';
import OrdersPage from './pages/ordersPage';
import ProductDetailsPage from './pages/productDetailsPage';
import LoginSignupPage from './pages/loginSignupPage';
import OrderSuccessPage from './pages/orderSuccessPage';
import NotFoundPage from './pages/404';

const store = configureStore({
	reducer: {
		product: productReducer,
		cart: cartReducer,
		order: orderReducer,
		user: userReducer
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='cart' element={<CartPage />} />
						<Route path='checkout' element={<CheckoutPage />} />
						<Route path='myorders' element={<OrdersPage />} />
						<Route path='order-success/:order-id' element={<OrderSuccessPage />} />
						<Route path='login' element={<LoginSignupPage />} />
						<Route path='product/:id' element={<ProductDetailsPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			{/* <App /> */}
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
