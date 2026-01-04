import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { UserLock } from "lucide-react";

const Login = () => {
  const { setUser, handleGoogleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  const handleForget = () => {
    navigate(`/forget/${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md border border-white">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium text-gray-700">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              className="input input-bordered w-full rounded-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full rounded-full"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={handleForget}
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="btn w-full rounded-full bg-gray-900 hover:bg-black text-amber-300 text-lg"
          >
            <UserLock className="mr-2" />
            Login
          </button>

          <div className="divider text-sm text-gray-400">OR</div>

          <button
            type="button"
            onClick={googleSignIn}
            className="btn w-full rounded-full bg-white border hover:bg-gray-100 text-gray-700"
          >
            <FcGoogle className="text-xl mr-2" />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?
            <Link
              to="/signup"
              className="ml-1 text-purple-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
