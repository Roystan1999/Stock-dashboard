// Navbar.js
import { LuCompass } from "react-icons/lu";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const formattedDate = () => {
     const day = new Date().toLocaleString('en-us', {weekday:'long'});
     const month = new Date().toLocaleString('en-us', {month: 'long'});
     const date = new Date().getDate();
     return `${day}, ${month} ${date}`;
  }

  return (
    <>
      <header className="text-white p-6 flex justify-between items-center pt-7">
        <div className="flex-none w-30 items-center pl-5 pt-4">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold flex justify-center items-center gap-2">
              <h1>Hello, Rance</h1>
              <MdVerified className="text-blue-500" />
            </div>
            <span className="text-zinc-500">{formattedDate()}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <nav className={`lg:flex gap-2 pr-10 ${isMenuOpen ? '' : 'hidden'}`}>
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <LuCompass />
                For you
              </button>
            </a>
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <HiOutlinePresentationChartLine />
                Screener
              </button>
            </a>
            <a href="#" className="hover:text-gray-300 pb-2">
              <button
                type="button"
                className="flex rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <RiSearch2Line />
              </button>
            </a>
          </nav>
          <div className="flex">
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <MdOutlineBookmarkAdd />
              </button>
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <FaBars />
          </button>
        </div>
      </header>

      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
