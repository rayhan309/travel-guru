import { useContext, useState } from "react";
import { AuthContext } from "../Providet/AuthContext";
import useimg from "../assets/user.png";
import { HiOutlineMail } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [card, setCard] = useState(false);

  const updateProfile = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUser(name, photo);
    console.log(name, photo);
    setUser({ ...user, displayName: name, photoURL: photo });
    e.target.reset();
    Swal.fire({
      title: "Good job!",
      text: "Your Profile Updated!",
      icon: "success",
    });
    setCard(false)
  };

  return (
    <>
      <div className="mt-10">
        {user?.photoURL ? (
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={user?.photoURL}
            alt="userimg"
          />
        ) : (
          <img src={useimg} alt="userimg" />
        )}
        <h2 className="text-2xl text-pink-500 mt-4 my-font font-semibold text-center">
          Hi 👋 {user?.displayName}
        </h2>
        <div className="flex justify-center">
          <div className="flex items-center gap-1.5 text-pink-500 text-center font-medium my-font">
            <HiOutlineMail />
            <p> {user?.email}</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setCard(!card)}
            className="btn btn-outline btn-secondary"
          >
            Update Your Profile
          </button>
        </div>
        <ToastContainer />
      </div>

    <div className={`w-full mx-auto mt-10 max-w-md backdrop-blur-lg bg-white/10 border border-white/20 
shadow-2xl rounded-2xl p-8 transition-all duration-[800ms] [transform-style:preserve-3d]
  ${card ? 'opacity-100 rotate-x-0' : 'opacity-0 rotate-x-90'}
`}>
    <form className="space-y-5" onSubmit={updateProfile}>
          <fieldset className="fieldset">
            <h2 className="text-2xl my-font font-semibold text-center text-white pb-2">
              Update Profile
            </h2>
            {/* email */}
            <label className="label text-white">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            {/* password */}
            <label className="label text-white">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button className="btn border-none text-white bg-linear-to-r from-purple-500  to-pink-500 mt-4">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
