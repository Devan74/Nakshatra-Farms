import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Search from "../../public/assets/search_Icon.png";
import Profile from "../../public/assets/profile.png";
import Cart from "../../public/assets/cart.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 bg-[#EFDDFF]">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            <FiMenu className="w-8 h-8 text-gray-600 hover:text-gray-800 transition duration-300" />
          </button>
          <div className="hidden md:block">
            <Image
              src={Logo}
              alt="Logo"
              height={60}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center flex-1 space-x-10 text-[#602D89] font-bold text-xl">
          <a href="#" className="hover:text-green-600 transition duration-300">
            Shop
          </a>
          <a href="#" className="hover:text-green-600 transition duration-300">
            Our Story
          </a>
          <a href="#" className="hover:text-green-600 transition duration-300">
            Gallery
          </a>
          <a href="#" className="hover:text-green-600 transition duration-300">
            Contact
          </a>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <Image
            src={Search}
            alt="Search"
            width={40}
            height={36}
            className="cursor-pointer"
          />
          <Image
            src={Profile}
            alt="Profile"
            width={40}
            height={36}
            className="cursor-pointer"
          />
          <Image
            src={Cart}
            alt="Cart"
            width={40}
            height={36}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EFDDFF] py-2 px-4 text-center font-bold">
          <div className="flex justify-between items-center gap-4">
            <Image
              src={Logo}
              alt="Logo"
              height={60}
              className="cursor-pointer"
            />
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <FiX className="w-8 h-8 text-gray-600 hover:text-gray-800 transition duration-300" />
            </button>
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="block py-2 hover:text-green-600 transition duration-300"
            >
              Shop
            </a>
            <a
              href="#"
              className="block py-2 hover:text-green-600 transition duration-300"
            >
              Our Story
            </a>
            <a
              href="#"
              className="block py-2 hover:text-green-600 transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#"
              className="block py-2 hover:text-green-600 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
