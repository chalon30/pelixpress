// src/components/HeaderDesktop.tsx
import Link from "next/link";

const HeaderDesktop = () => {
  return (
    <header
      className="text-white p-4 shadow-lg shadow-red-900 hidden md:flex items-center justify-between border-b-4 border-red-500 shadow-[0_0_10px_red]"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #1a0000 100%)"
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <Link
            href="/"
            className="text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            Pelixpress
          </Link>
          <img
            src="img/header/gif2.gif"
            alt="Logo"
            className="w-12 h-12"
          />
        </h1>

        {/* Menú de navegación */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              >
                🎬 Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              >
                ⭐ About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-semibold hover:text-yellow-400 hover:drop-shadow-[0_0_6px_yellow] transition-all duration-300 ease-in-out"
              >
                📩 Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderDesktop;
