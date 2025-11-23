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
    <div className="hero my-38 bg-pink-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-28">
        <div className="text-center lg:text-left text-pink-400">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={signUpHandle}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Email</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                  required
                />

                {/* photo */}
                <label className="label">Photo</label>
                <input
                  type="text"
                  className="input"
                  name="photo"
                  placeholder="PhotoURL"
                  required
                />

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
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                {/* btn */}
                <button className="btn btn-secondary mt-4">SignUp</button>
              </fieldset>
            </form>
            <Link to="/authlayout">
              Alrady Have Account?{" "}
              <span className="text-pink-500 cursor-pointer hover:underline">
                {" "}
                Please SignIn
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
