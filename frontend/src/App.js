import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { checkAuthAC } from './actions';
import { useDispatch } from 'react-redux';

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuthAC(navigate));
	}, []);

	return <Outlet />;
}

export default App;
