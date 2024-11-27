/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import {
  RiDownloadFill,
  RiDownloadLine,
  RiHome5Fill,
  RiHome5Line,
  RiSearchFill,
  RiSearchLine,
} from "react-icons/ri";
import { IoPersonCircle, IoPersonCircleOutline } from "react-icons/io5";
import { TbCategory, TbCategoryFilled } from "react-icons/tb";

export default function Layout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full">
      {/* Top header for larger screens */}
      <header className="sticky top-0 z-50 px-4 lg:px-10 py-6 hidden lg:flex items-center justify-between backdrop-blur-md text-white">
        <Link to="/">
          <h1 className="text-xl lg:text-2xl font-semibold">STREAM</h1>
        </Link>

        <nav className="flex gap-4">
          <Link
            to="/home"
            className={`hover:text-blue-400 transition ${
              currentPath === "/home" ? "text-blue-400" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`hover:text-blue-400 transition ${
              currentPath === "/movies" ? "text-blue-400" : "text-white"
            }`}
          >
            Movies
          </Link>
          <Link
            to="/series"
            className={`hover:text-blue-400 transition ${
              currentPath === "/series" ? "text-blue-400" : "text-white"
            }`}
          >
            Series
          </Link>
          <Link
            to="/profile"
            className={`hover:text-blue-400 transition ${
              currentPath === "/profile" ? "text-blue-400" : "text-white"
            }`}
          >
            Profile
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="w-full h-full">{children}</main>

      {/* Footer */}
      <div className="mb-14 lg:mb-0">
        <Footer />
      </div>

      {/* Bottom header for smaller screens */}
      <header className="w-full fixed bottom-0 border-t border-neutral-800 left-0 z-50 p-4 text-[10px] lg:hidden flex items-center justify-between bg-[#0f1014] text-white">
        <Link
          to="/"
          className="hover:text-blue-400 transition flex-col flex items-center"
        >
          {currentPath === "/" ? (
            <RiHome5Fill size={20} />
          ) : (
            <RiHome5Line size={20} />
          )}
          Home
        </Link>
        <Link
          to="/search"
          className="hover:text-blue-400 transition flex-col flex items-center"
        >
          {currentPath === "/movies" ? (
            <RiSearchFill size={20} />
          ) : (
            <RiSearchLine size={20} />
          )}
          Search
        </Link>
        <Link
          to="/category"
          className="hover:text-blue-400 transition flex-col flex items-center"
        >
          {currentPath === "/category" ? (
            <TbCategoryFilled size={20} />
          ) : (
            <TbCategory size={20} />
          )}
          Category
        </Link>
        <Link
          to="/download"
          className="hover:text-blue-400 transition flex-col flex items-center"
        >
          {currentPath === "/download" ? (
            <RiDownloadFill size={20} />
          ) : (
            <RiDownloadLine size={20} />
          )}
          Download
        </Link>
        <Link
          to="/login"
          className="hover:text-blue-400 transition flex-col flex items-center"
        >
          {currentPath === "/login" ? (
            <IoPersonCircle size={20} />
          ) : (
            <IoPersonCircleOutline size={20} />
          )}
          Profile
        </Link>
      </header>
    </div>
  );
}
