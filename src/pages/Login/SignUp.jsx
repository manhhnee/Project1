import React from 'react';
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [state, setState] = React.useState({
    name: '',
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
    const { name, email, password } = state;
    alert(`You are signed up with name: ${name}, email: ${email}, and password: ${password}`);
    for (const key in state) {
      setState({
        ...state,
        [key]: '',
      });
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-white flex flex-col items-center justify-center w-full h-full px-10 text-center"
    >
      <h1 className="text-3xl font-bold">Create Account</h1>
      <div className="social-container flex items-center justify-center my-5">
        <Link
          to="#"
          className="social flex items-center justify-center border border-gray-300 rounded-full w-10 h-10 mx-1"
        >
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          to="#"
          className="social flex items-center justify-center border border-gray-300 rounded-full w-10 h-10 mx-1"
        >
          <i className="fab fa-google-plus-g"></i>
        </Link>
        <Link
          to="#"
          className="social flex items-center justify-center border border-gray-300 rounded-full w-10 h-10 mx-1"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>
      <span className="text-sm font-light mb-4">or use your email for registration</span>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
        className="w-full bg-gray-200 px-3 py-2 mb-3 rounded-md outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
        className="w-full bg-gray-200 px-3 py-2 mb-3 rounded-md outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
        className="w-full bg-gray-200 px-3 py-2 mb-3 rounded-md outline-none"
      />
      <button className="bg-red-600 text-white font-bold uppercase text-xs py-3 px-12 rounded-full transition-transform duration-75 ease-in transform hover:scale-95">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
