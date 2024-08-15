import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: '',
      });
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-lg shadow-lg">
      <form onSubmit={handleOnSubmit} className="flex flex-col items-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        <div className="flex space-x-4 mb-6">
          <Link
            to="#"
            className="social flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            to="#"
            className="social flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700"
          >
            <i className="fab fa-google-plus-g" />
          </Link>
          <Link
            to="#"
            className="social flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700"
          >
            <i className="fab fa-linkedin-in" />
          </Link>
        </div>
        <span className="text-sm text-gray-500 mb-6">or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Link to="#" className="text-sm text-indigo-600 hover:underline mb-6">
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="py-3 px-8 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
