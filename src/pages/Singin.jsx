import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../Providet/AuthContext";
import Swal from "sweetalert2";

const Singin = () => {
  const { siginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
      navigate(location?.state || '/');
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <div className="hero my-38 bg-pink-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-28">
        <div className="text-center lg:text-left text-pink-400">
          <h1 className="text-5xl font-bold">SigIn now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={siginHandle}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover text-pink-500">
                    Forgot password?
                  </a>
                </div>
                <button className="btn btn-secondary mt-4">SigIn</button>
              </fieldset>
            </form>
            <Link to="/authlayout/signup">
              Alrady Not Have Account?{" "}
              <span className="text-pink-500 cursor-pointer hover:underline">
                {" "}
                Please SignUp
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Singin;
