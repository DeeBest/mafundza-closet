import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full">
      <section className="flex flex-col items-center justify-center w-full max-w-6xl gap-2 p-4 mx-auto ">
        <Logo />
        <div className="flex items-center justify-center w-full gap-2">
          <Link className="text-sm duration-300 hover:text-gray-400 " to="/">
            About
          </Link>
          <Link className="text-sm duration-300 hover:text-gray-400 " to="/">
            Contact
          </Link>
          <Link className="text-sm duration-300 hover:text-gray-400 " to="/">
            Shop
          </Link>
        </div>
        <div className="flex items-center justify-center w-full gap-2 text-lg ">
          <Link
            to="https://www.facebook.com/princess.jeanette.35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="duration-300 hover:text-gray-400 " />
          </Link>
          <Link
            to="https://wa.me/+27799887080"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="duration-300 hover:text-gray-400 " />
          </Link>
          <FaInstagram className="duration-300 hover:text-gray-400 " />
        </div>
        <div className="flex flex-col items-center justify-between w-full text-xs text-gray-400 sm:flex-row ">
          <p>
            &copy;All Rights Reserved || Mafundza's Closet{' '}
            {new Date().getFullYear()}.
          </p>
          <div className="flex flex-col items-center justify-center">
            <p>
              Developed & Maintained By Simphiwe {new Date().getFullYear()}.
            </p>
            <div className="flex gap-1">
              <Link
                className="duration-500 hover:rotate-45"
                to="mailto:simphiwedladla8@gmail.com"
              >
                <FaEnvelope />
              </Link>
              <Link
                className="duration-500 hover:rotate-45"
                to="https://github.com/DeeBest"
              >
                <FaGithub />
              </Link>
              <Link
                className="duration-500 hover:rotate-45"
                to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
