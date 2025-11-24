import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../Providet/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  // sigin handle
  const signUpHandle = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase, 1 lowercase letter and be at least 6 characters long."
      );
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return
    }

    try {
      // Create User
      const res = await createUser(email, password);

      // Update User Profile
      await updateUser(name, photo);

      // SweetAlert2Show success message
      Swal.fire({
        title: "Good job!",
        text: "Succesfully Create Account!",
        icon: "success",
      });
      e.target.reset();

      // home padhno
      navigate("/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-400 to-pink-500 relative overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-20">
        <div className="text-center text-white/40">
          <h1 className="text-5xl my-font font-bold">Create Your Account!</h1>
          <p className="py-6">
            Join our community and unlock exclusive features. Your journey
            begins here!
          </p>
        </div>
        <div className="w-full signup-animate max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
          <form onSubmit={signUpHandle}>
            <fieldset className="fieldset text-white">
              <h2 className="text-2xl my-font font-semibold text-center text-white pb-2">
                Sign Up
              </h2>
              {/* name */}
              <label className="label pt-3">Name</label>
              <input
                type="text"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                name="name"
                placeholder="Name"
                required
              />

              {/* photo */}
              <label className="label pt-3">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />

              {/* email */}
              <label className="label pt-3">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />

              {/* password */}
              <label className="label pt-3">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />

              {/* btn */}
              <button className="btn border-none text-white bg-linear-to-r from-purple-500  to-pink-500 mt-4">
                SignUp
              </button>
            </fieldset>
          </form>
          <Link className="text-white text-xs" to="/authlayout">
            Alrady Have Account?{" "}
            <span className="text-pink-500 cursor-pointer hover:underline">
              {" "}
              Please SignIn
            </span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
