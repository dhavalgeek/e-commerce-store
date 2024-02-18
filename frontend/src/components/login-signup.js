import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const initialUser = { username: '', password: '', name: '' };

const LoginSignup = ({ login, signup }) => {
	const [user, setUser] = useState(initialUser);
	const [showLogin, setShowLogin] = useState(true);

	useEffect(() => {
		setUser(initialUser);
	}, [showLogin]);

	const userStateHandler = (field, value) => {
		setUser((user) => ({ ...user, [field]: value }));
	};

	const validateLogin = (e) => {
		e.preventDefault();

		if (!user.username || !user.password) {
			alert('Please enter required fields');
		} else {
			login(user);
		}
	};

	const validateSignup = (e) => {
		e.preventDefault();

		if (!user.username || !user.password || !user.name) {
			alert('Please enter required fields');
		} else {
			signup(user);
		}
	};

	return (
		<div className='container my-5'>
			<div>
				<Link to='/' className='logo'>
					<h1 className='text-center'>e-Shopper</h1>
				</Link>
			</div>

			<div className='d-flex justify-content-center'>
				{showLogin && (
					<div className='login-box m-auto mt-5 col-4'>
						<h3 className='text-center'>Login</h3>
						<form className='needs-validation mb-2' novalidate='' action='' onSubmit={validateLogin}>
							<div>
								<label for='username' className='form-label'>
									Username
								</label>
								<input
									type='username'
									className='form-control'
									placeholder='Username'
									required=''
									value={user.username}
									onChange={(e) => userStateHandler('username', e.target.value)}
								/>
								<div className='invalid-feedback'>Valid username required</div>
							</div>
							<div>
								<label for='password' className='form-label'>
									Password
								</label>
								<input
									type='password'
									className='form-control'
									placeholder='password'
									required=''
									minlength='6'
									value={user.password}
									onChange={(e) => userStateHandler('password', e.target.value)}
								/>
								<div className='invalid-feedback'>Valid Password required (min 6 chars)</div>
							</div>

							<input type='submit' className='form-control btn-success mt-3' value='Login' />
						</form>
						<Link onClick={() => setShowLogin(false)}>Don't have an account? Create One</Link>
					</div>
				)}

				{!showLogin && (
					<div className='login-box m-auto mt-5 col-4'>
						<h3 className='text-center'>Sign Up</h3>
						<form className='needs-validation mb-2' novalidate='' action='' onSubmit={validateSignup}>
							<div>
								<label for='name' className='form-label'>
									Name
								</label>
								<input type='text' className='form-control' placeholder='Full Name' required='' value={user.name} onChange={(e) => userStateHandler('name', e.target.value)} />
								<div className='invalid-feedback'>Name required</div>
							</div>
							<div>
								<label for='username' className='form-label'>
									Username
								</label>
								<input
									type='username'
									className='form-control'
									placeholder='Username'
									required=''
									value={user.username}
									onChange={(e) => userStateHandler('username', e.target.value)}
								/>
								<div className='invalid-feedback'>Valid username required</div>
							</div>
							<div>
								<label for='password' className='form-label'>
									Password
								</label>
								<input
									type='password'
									className='form-control'
									placeholder='password'
									required=''
									minlength='6'
									value={user.password}
									onChange={(e) => userStateHandler('password', e.target.value)}
								/>
								<div className='invalid-feedback'>Valid Password required (min 6 chars)</div>
							</div>

							<input type='submit' className='form-control btn-success mt-3' value='Create Account' />
						</form>
						<Link onClick={() => setShowLogin(true)}> Have an account? Login Here</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginSignup;
