"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import useMenu from "@/scripts/menu";

const HeaderMobile = () => {
  const { isOpen, toggleMenu, containerRef } = useMenu();

  return (
    <header
      ref={containerRef}
      className="bg-black text-white p-4 shadow-lg shadow-red-900 flex md:hidden relative z-50"
    >
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Pelixpress</span>
          </Link>
          <img
            src="img/header/gif2.gif"
            alt="Logo"
            className="w-10 h-10"
          />
        </div>

        {/* Botón menú */}
        <button
          id="menu-button"
          onClick={toggleMenu}
          className="text-white p-2 hover:bg-red-700 rounded-md focus:outline-none ml-auto z-50"
        >
          {isOpen ? (
            <FaTimes className="w-8 h-8 text-red-500 hover:text-red-400 transition-colors duration-300" />
          ) : (
            <FaBars className="w-8 h-8 text-red-500 hover:text-red-400 transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Menú desplegable estilizado */}
      <nav
        id="mobile-menu"
        className={`absolute top-20 left-0 w-full p-6 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-10"
        } shadow-lg border-t-4 border-red-500 shadow-[0_0_10px_red]`}
        style={{
          background: "linear-gradient(180deg, #000000 0%, #1a0000 100%)"
        }}
      >
        <ul className="flex flex-col space-y-6">
          <li>
            <Link
              href="/"
              className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              🎬 Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              ⭐ About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              📩 Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
