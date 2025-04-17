import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
      <section className="relative flex items-center justify-between w-full max-w-6xl gap-5 p-4 mx-auto ">
        <Logo />
        <nav className="items-center hidden gap-2 text-md sm:flex ">
          <NavLink
            onClick={() => setMenu('home')}
            to="/"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'home' && 'text-amber-600'
            } `}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenu('shop')}
            to="/shop"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'shop' && 'text-amber-600'
            } `}
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setMenu('men')}
            to="men"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'men' && 'text-amber-600'
            } `}
          >
            Men
          </NavLink>
          <NavLink
            onClick={() => setMenu('women')}
            to="women"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'women' && 'text-amber-600'
            } `}
          >
            Women
          </NavLink>
          <NavLink
            onClick={() => setMenu('kids')}
            to="kids"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'kids' && 'text-amber-600'
            } `}
          >
            Kids
          </NavLink>
        </nav>
        <nav
          className={`${
            isMobileOpen ? 'h-screen' : 'h-0'
          } fixed left-0 flex flex-col items-center w-full gap-2 bg-white z-[100] top-20 text-md sm:hidden overflow-hidden transition-[height] duration-300 `}
          onClick={toggleMobileMenu}
        >
          <NavLink
            onClick={() => setMenu('home')}
            to="/"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'home' && 'text-amber-600'
            } `}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenu('shop')}
            to="/shop"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'shop' && 'text-amber-600'
            } `}
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setMenu('men')}
            to="men"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'men' && 'text-amber-600'
            } `}
          >
            Men
          </NavLink>
          <NavLink
            onClick={() => setMenu('women')}
            to="women"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'women' && 'text-amber-600'
            } `}
          >
            Women
          </NavLink>
          <NavLink
            onClick={() => setMenu('kids')}
            to="kids"
            className={`duration-500 hover:text-amber-600 active:text-pink-700 ${
              menu === 'kids' && 'text-amber-600'
            } `}
          >
            Kids
          </NavLink>
        </nav>
        <div className="items-center hidden gap-2 sm:flex">
          <button className="px-3 py-1 text-lg border-2 rounded-md border-amber-600 ">
            Login
          </button>
          <button className="flex">
            <FaShoppingCart className="text-3xl " />
            <span className="flex items-center justify-center w-5 h-5 p-1 -mt-2 -ml-2 text-xs text-white rounded-full bg-amber-600">
              0
            </span>
          </button>
        </div>
        <button className="flex text-xl sm:hidden " onClick={toggleMobileMenu}>
          {isMobileOpen ? (
            <FaTimes
              className={`text-pink-500 ${
                isMobileOpen ? 'opacity-100' : 'opacity-0'
              } transition-[opacity] duration-300 `}
            />
          ) : (
            <FaBars
              className={`text-amber-500 ${
                isMobileOpen ? 'opacity-0' : 'opacity-100'
              } transition-[opacity] duration-300 `}
            />
          )}
        </button>
      </section>
    </header>
  );
};
export default Header;
