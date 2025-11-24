import { useContext } from "react";
import { AuthContext } from "../Providet/AuthContext";
import useimg from "../assets/user.png";
import { HiOutlineMail } from "react-icons/hi";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
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
      <h2 className="text-2xl text-pink-500 mt-2 my-font font-semibold text-center">
        Hi 👋 {user?.displayName}
      </h2>
      <div className="flex justify-center">
        <div className="flex items-center gap-1.5 text-pink-300 text-center font-medium my-font">
          <HiOutlineMail />
          <p> {user?.email}</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-outline btn-secondary">Update Your Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
