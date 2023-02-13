import React, { useRef } from 'react';
import { SiNike } from 'react-icons/si';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineShoppingBasket } from 'react-icons/md';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  window.addEventListener('scroll', (e) => {
    if (navbarRef && navbarRef.current) {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('active');
      } else {
        navbarRef.current.classList.remove('active');
      }
    }
  });

  return (
    <nav
      className="fixed top-0 left-0 w-full px-4 py-2 bg-transparent"
      ref={navbarRef}
    >
      <div className="container flex items-center justify-content-between w-full sm:w-full md:w-[90%] lg:w-[90%] mx-auto">
        <a
          title="Ecommerce-demo"
          href="javascript.void(0)"
          className="navbar-brand w-[50%] sm:w-[50%] md:w-[50%] lg:w-lg-[20%]"
        >
          <SiNike className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl" />
        </a>
        <ul className="navbar-nav hidden sm:hidden md:hidden lg:flex list-none items-center justify-center gap-3 lg:w-[60%]">
          <li>
            <a href="new_featured">New & Featured</a>
          </li>
          <li>
            <a href="new_featured">Men</a>
          </li>
          <li>
            <a href="new_featured">Women</a>
          </li>
          <li>
            <a href="new_featured">Kids</a>
          </li>
          <li>
            <a href="new_featured">Sale</a>
          </li>
        </ul>
        <div className="navar-actions w-[50%] sm:w-[50% md:w-[50%] lg:w-lg-[20%] flex items-center gap-5 sm:gap-5 md:gap-7 lg:gap-8 justify-end">
          <a title="Favorite" href="javascript.void(0)">
            <AiOutlineHeart className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl" />
          </a>
          <a title="Favorite" href="javascript.void(0)">
            <MdOutlineShoppingBasket className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
