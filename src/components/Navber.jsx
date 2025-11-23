import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.jpg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import userImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Providet/AuthContext";
import { FaAppStore } from "react-icons/fa";
import Swal from "sweetalert2";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <AiTwotoneHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allskills"}>
          <FaAppStore /> All Skills
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>
          <CgProfile /> My Profile
        </NavLink>
      </li>
    </>
  );

  const signOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        signOutUser();
        navigate('/')
      }
    });
  };

  return (
    <div className="shadow-sm font-bold bg-pink-100">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={logo}
              alt=""
            />
            <span className="text-3xl font-bold text-pink-500">SkillSwap</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <img className="w-12 rounded-full" src={user?.photoURL}></img>
          ) : (
            <img className="rounded-2xl opacity-50" src={userImg} alt="user" />
          )}

          {user ? (
            <button
              onClick={signOut}
              className="btn font-bold btn-outline btn-secondary"
            >
              <FiLogOut /> SignOut
            </button>
          ) : (
            <Link
              to={"/authlayout"}
              className="btn font-bold btn-outline btn-secondary"
            >
              <FiLogIn /> SigIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
