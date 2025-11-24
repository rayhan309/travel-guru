import { Linkedin } from "lucide-react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="footer my-font sm:footer-horizontal bg-pink-500 text-neutral-content p-10">
      <nav>
        <div className="flex gap-2 items-center">
          <img className="w-12 opacity-70 h-12 rounded-full" src={logo} alt="logo" />
          <h6 className="footer-title text-xl">SkillSwap</h6>
        </div>
        <p className="w-62 pl-10 mt-3">Discription: This Website is a best cours all time this cours is roules very simple, 
          This cours on visit but all time acseseble </p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">social links</h6>
        <div className="flex items-center gap-5 pt-3">
          <Link to={"https://www.facebook.com/"} className="text-2xl cursor-pointer"><FaFacebookSquare /></Link>
          <Link to={'https://www.instagram.com/'} className="text-2xl cursor-pointer"><FaInstagramSquare /></Link>
          <Link to={'https://www.linkedin.com/feed/'} className="cursor-pointer">
            <Linkedin />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
