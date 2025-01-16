"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHome, FaBoxOpen, FaBlog, FaPhoneAlt, FaShoppingCart, FaBars, FaTimes , FaUser} from "react-icons/fa";
import { useCart } from "@/context/cartProvider";
import SideCart from "./SideCart";  
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSideCart, setShowSideCart] = useState(false);
  const { countAllItems } = useCart();  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);  
    }
  };

  return (
    <>
      <nav className="bg-black shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <Link href="/" passHref>
            <div className="flex items-center">
              <img src="/logoo.png" alt="Logo" width={90} className="object-contain h-[100px]" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" passHref>
              <div className="flex items-center text-yellow-300 hover:text-yellow-500 transition duration-300">
                <FaHome className="mr-2" />
                Home
              </div>
            </Link>
            <Link href="/Shop" passHref>
              <div className="flex items-center text-yellow-300 hover:text-yellow-500 transition duration-300">
                <FaBoxOpen className="mr-2" />
                Shop
              </div>
            </Link>
            <Link href="/About" passHref>
              <div className="flex items-center text-yellow-300 hover:text-yellow-500 transition duration-300">
                <FaBlog className="mr-2" />
                About
              </div>
            </Link>
            <Link href="/Contact" passHref>
              <div className="flex items-center text-yellow-300 hover:text-yellow-500 transition duration-300">
                <FaPhoneAlt className="mr-2" />
                Contact
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" passHref>
          <FaUser className="text-yellow-300 text-2xl" />
          </Link>
            <button
              id="cart-button"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full relative shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition duration-300 ease-in-out"
              onClick={() => setShowSideCart((old) => !old)}
            >
              <FaShoppingCart className="mr-2 text-2xl text-black" />
              {countAllItems() > 0 && (
                <div className="font-semibold absolute text-white bg-red-600 text-xs w-6 h-6 rounded-full flex items-center justify-center -top-2 -right-2 bg-opacity-90 animate-pulse">
                  <p>{countAllItems()}</p>
                </div>
              )}
            </button>
            <div className="md:hidden">
              <button
                id="menu-button"
                aria-label="Toggle menu"
                className={`transition-transform duration-300 transform ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <FaTimes className="text-yellow-300 text-2xl" />
                ) : (
                  <FaBars className="text-yellow-300 text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-yellow-300 text-2xl"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <nav className="space-y-6 mt-12">
          <Link href="/" legacyBehavior>
            <a className="flex items-center text-yellow-300 text-lg" onClick={handleLinkClick}>
              <FaHome className="mr-2" />
              Home
            </a>
          </Link>
          <Link href="/Shop" legacyBehavior>
            <a className="flex items-center text-yellow-300 text-lg" onClick={handleLinkClick}>
              <FaBoxOpen className="mr-2" />
              Shop
            </a>
          </Link>
          <Link href="/About" legacyBehavior>
            <a className="flex items-center text-yellow-300 text-lg" onClick={handleLinkClick}>
              <FaBlog className="mr-2" />
              About
            </a>
          </Link>
          <Link href="/Contact" legacyBehavior>
            <a className="flex items-center text-yellow-300 text-lg" onClick={handleLinkClick}>
              <FaPhoneAlt className="mr-2" />
              Contact
            </a>
          </Link>
        </nav>
      </div>

      <SideCart
        visible={showSideCart}
        onRequestClose={() => setShowSideCart(false)}
      />
    </>
  );
};

export default Navbar;
