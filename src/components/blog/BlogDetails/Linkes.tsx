import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const MainLinks: React.FC = () => {
  return (
    <nav className="flex items-center text-white">
      <div className="flex items-center gap-2">
        <Link to="/" className="hover:text-secondary text-lg">
          Home
        </Link>
        <IoIosArrowForward className="text-white" />
      </div>
      <div className="flex items-center gap-2">
        <Link to="/Blogs" className="hover:text-secondary text-lg">
          Our Blog
        </Link>
      </div>
    </nav>
  );
};

export default MainLinks;
