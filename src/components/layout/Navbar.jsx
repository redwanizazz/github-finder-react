import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <FaGithub className="text-3xl" aria-label="GitHub Logo" />
          <Link to="/" className="text-lg font-bold hover:text-gray-300">
            {title}
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn focus:ring">
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost btn-sm rounded-btn focus:ring"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
