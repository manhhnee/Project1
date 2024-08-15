import { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Login() {
  const [type, setType] = useState('signIn');

  const handleOnClick = () => {
    setType(type === 'signIn' ? 'signUp' : 'signIn');
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center relative overflow-hidden">
        {/* Form Container */}
        <div
          className={`absolute inset-0 flex transition-transform duration-700 ${
            type === 'signIn' ? 'translate-x-0' : 'translate-x-1/2'
          }`}
        >
          <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col items-center justify-center">
            {/* Login Form */}
            <div className={`${type === 'signIn' ? 'block' : 'hidden'}`}>
              <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
              <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
              <form action="" className="flex flex-col gap-4">
                <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <IoEye className="absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-700">Login</button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>
              <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-700 text-[#002D74]">
                <FcGoogle className="mr-5 size-6" />
                Login with Google
              </button>
              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <Link to="#">Forgot your password?</Link>
              </div>
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <button
                  onClick={handleOnClick}
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-700"
                >
                  Register
                </button>
              </div>
            </div>

            {/* Register Form */}
            <div className={`${type === 'signUp' ? 'block' : 'hidden'}`}>
              <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
              <p className="text-xs mt-4 text-[#002D74]">Create a new account</p>
              <form action="" className="flex flex-col gap-4">
                <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                <input className="p-2 rounded-xl border" type="password" name="password" placeholder="Password" />
                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-700">
                  Register
                </button>
              </form>
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Already have an account?</p>
                <button
                  onClick={handleOnClick}
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/2 transition-transform duration-700">
          <img
            className={`w-full h-full object-cover transition-transform duration-700 ${
              type === 'signIn' ? 'translate-x-full' : 'translate-x-0'
            }`}
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Login Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
