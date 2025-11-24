import Swal from "sweetalert2";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Inrole = () => {

    const navigate = useNavigate();

  // inrole
  const siginHandle = (e) => {
    e.preventDefault();
    // SweetAlert2Show success message
    Swal.fire({
      title: "Good job!",
      text: "Succesfully SignIn Account!",
      icon: "success",
    });
    e.target.reset();

    navigate(-1)
  };

  return (
    <>
    <Navber />
    <div className="hero my-10 md:my-38">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-28">
        <div className="text-center lg:text-left text-pink-400">
          <h1 className="text-5xl font-bold">Inrole now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={siginHandle}>
                <h3 className="text-xl my-font text-center text-pink-400 font-semibold my-5">Infomation!</h3>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label font-bold text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />

                {/* password */}
                <label className="label font-bold text-white">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                  required
                />
                <button className="btn border-none bg-linear-to-r text-white font-medium to-purple-500 from-pink-500 mt-4">Submite</button>
              </fieldset>
            </form>
          </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Inrole;
