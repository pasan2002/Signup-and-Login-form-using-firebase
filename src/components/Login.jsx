import React from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully!!");
      setError(null); 
      setLoginSuccess(true); 
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
      setLoginSuccess(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <div className="bg-secondary shadow-md rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Log In</h1>
        {loginSuccess && (
          <div className="text-green-500 text-sm font-medium mb-4">
            Logged in successfully!
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm font-medium mb-4">
              {error}
            </div>
          )}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-3 px-4 font-medium hover:bg-blue-700"
            >
              LOG IN
            </button>
          </div>
          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 font-extrabold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
