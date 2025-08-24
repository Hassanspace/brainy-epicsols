import React, { useState } from "react";
import logo from "../../assets/BRAINY.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, email, password });
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full py-4 shadow-md flex justify-center bg-white">
        <img src={logo} alt="Logo" className="h-10" />
      </nav>

      <div className="flex justify-center items-center mt-10 text-3xl font-semibold">
        <h1>Login to Your Account</h1>
      </div>

      {/* Login Form */}
      <div className="max-w-md w-full mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSignIn} className="flex flex-col gap-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-[#30303D] font-medium">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-[#075E54] text-white h-14 w-full rounded-[12px] mt-4 cursor-pointer"
          >
            LOGIN YOUR ACCOUNT
          </button>
        </form>
      </div>

      {/* Footer: Signup Link */}
      <div className="flex justify-center items-center mt-6 font-bold">
        DONT HAVE AN ACCOUNT? {" "}
        <Link to="/signup" className="text-green-400 ml-1">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Login;
