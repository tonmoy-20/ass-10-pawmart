import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { UserPen } from "lucide-react";

const notify = () => toast("Successfully Registered 🎉");

const Register = () => {
  const { registerWithEmailPassword, user, setUser, handleGoogleSignIn } =
    useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photourl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length < 6) return alert("Password must be at least 6 characters");
    if (!uppercase.test(pass))
      return alert("Password needs an uppercase letter");
    if (!lowercase.test(pass))
      return alert("Password needs a lowercase letter");

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photourl,
        }).then(() => {
          setUser(userCredential.user);
        });
      })
      .catch((err) => console.log(err));
  };

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handelSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-full"
          />

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full rounded-full"
          />

          <input
            name="photoUrl"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full rounded-full"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full rounded-full"
          />

          <button
            type="button"
            onClick={googleSignUp}
            className="btn w-full bg-white border hover:bg-gray-100 rounded-full flex gap-2"
          >
            <FcGoogle className="text-xl" /> Sign up with Google
          </button>

          <p className="text-center text-sm">
            Already have an account?
            <Link to="/login" className="text-purple-600 font-medium ml-1">
              Login
            </Link>
          </p>

          <button
            onClick={notify}
            className="btn w-full bg-gray-900 hover:bg-black text-amber-300 rounded-full flex gap-2"
          >
            <UserPen /> Register
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
