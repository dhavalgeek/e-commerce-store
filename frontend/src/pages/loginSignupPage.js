import { useDispatch } from 'react-redux';
import Footer from '../components/footer';
import LoginSignup from '../components/login-signup';
import { loginAC, signupAC } from '../actions';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = (user) => {
		dispatch(loginAC(user, navigate));
	};

	const signup = (user) => {
		dispatch(signupAC(user, navigate));
	};

	return (
		<>
			<LoginSignup login={login} signup={signup} />
			<Footer />
		</>
	);
};

export default LoginSignupPage;
