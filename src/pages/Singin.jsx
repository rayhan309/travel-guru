import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { use, useRef } from "react";
import { AuthContext } from "../Providet/AuthContext";
import Swal from "sweetalert2";

const Singin = () => {
  const { siginUser, forgetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  // sigin handle
  const siginHandle = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // sigin user
      const res = await siginUser(email, password);

      e.target.reset();

      // toast user

      // SweetAlert2Show success message
      Swal.fire({
        title: "Good job!",
        text: "Succesfully SignIn Account!",
        icon: "success",
      });

      // return user
      navigate(location?.state || "/");
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };


  // forget oassword 
  const passwordForogetHandle = () => {
    const email = emailRef.current.value;
    toast.success("Please Chek Your Email!")
    forgetPassword(email)
  }

  return (
    <>
      <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-300 via-pink-400 to-purple-400 relative overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-28">
          <div className="text-center lg:text-left text-white opacity-65">
            <h1 className="text-5xl font-bold my-font">Welcome Back</h1>
            <p className="py-6">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form className="space-y-5" onSubmit={siginHandle}>
              <fieldset className="fieldset">
                <h2 className="text-2xl my-font font-semibold text-center text-white pb-2">
                  Sign In
                </h2>
                {/* email */}
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />

                {/* password */}
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <div>
                  <a 
                  onClick={passwordForogetHandle}
                  className="link link-hover opacity-65 text-white">
                    Forgot password?
                  </a>
                </div>
                <button className="btn border-none text-white bg-linear-to-r from-purple-500  to-pink-500 mt-4">Sign In</button>

                {/* multiple loing system */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* goggle */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                {/* git hub */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 mt-3 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Github
                </button>
              </fieldset>
            </form>
            <Link
              className="text-white text-xs text-center mt-2 opacity-65"
              to="/authlayout/signup"
            >
              Dont Have Account?{" "}
              <span className="text-pink-400 cursor-pointer hover:underline">
                {" "}
                Please SignUp
              </span>
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Singin;
