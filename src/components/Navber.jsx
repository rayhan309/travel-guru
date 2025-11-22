import { AiTwotoneHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import logo from '../assets/logo.jpg'

const Navber = () => {

    const links = <>
    <li><NavLink to={'/'} className={'bg-white mr-3'}><AiTwotoneHome /> Home</NavLink></li>
    <li><NavLink className={'bg-white'}><CgProfile /> My Profile</NavLink></li>
    </>

  return (
    <div className="shadow-sm font-bold pt-2">
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
        <div className="flex items-center gap-2"><img className="w-16 h-16 rounded-full object-cover" src={logo} alt="" /><span className="text-3xl font-bold text-white">SkillSwap</span></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="btn  btn-primary">SingUp</Link>
        <Link className="btn  btn-secondary">SigIn</Link>
      </div>
    </div>
    </div>
  );
};

export default Navber;
