import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4 lg:px-10 text-xs md:text-sm">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Connected with us!</h2>
            <p>&copy; Copyright 2024 Company.com</p>
          </div>

          {/* Company Links */}
          <div className="w-full lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Movie
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Tv Shows
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Web Series
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Top Trending
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="w-full lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Video
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Buy Plan
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-400">
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter and never miss our latest movie, web
              series, TV show, etc.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 w-full rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
