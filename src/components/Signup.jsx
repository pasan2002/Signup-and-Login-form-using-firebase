import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [accCreated, setAccCreated] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error("Password and Confirm Password must match.");
      }

      await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
      console.log("Account Created!");
      setError(null);
      setAccCreated(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setAccCreated(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <div className="bg-secondary shadow-md rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        {accCreated && (
          <div className="text-green-500 font-medium text-sm mb-6">
            Account Created Successfully!!
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm font-medium mb-6">{error}</div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
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
          <div className="flex flex-col">
            <label htmlFor="confirmpassword" className="mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Your Password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-3 px-4 font-medium hover:bg-blue-700"
            >
              SIGN UP
            </button>
          </div>
        </form>

        <p className="text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-extrabold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
