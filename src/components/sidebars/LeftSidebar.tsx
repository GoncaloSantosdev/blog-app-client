import { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// Components
import { Navbar } from "../";
// Icons
import { PenLine, Sun, Moon } from "lucide-react";

const LeftSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const iconClass = "w-[22px] h-[22px] stroke-[1.5px]";
  const linkClass =
    "flex justify-center w-10 items-center h-10 hover:bg-gray-50 rounded-xl transition-colors duration-200";

  return (
    <div className="h-full flex flex-col items-center py-8 relative">
      {/* Logo */}
      <div className="mb-16">
        <Link to="/" className="text-2xl" title="BlogApp">
          <PenLine className={`${iconClass} text-primary-blue`} />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex items-center">
        <Navbar />
      </nav>

      {/* Bottom Section */}
      <div className="space-y-8">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={linkClass}
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? (
            <Sun className={`${iconClass} text-gray-700`} />
          ) : (
            <Moon className={`${iconClass} text-gray-700`} />
          )}
        </button>

        {/* User Profile */}
        <div className={`${linkClass} ring-2 ring-gray-100`} title="Profile">
          <img
            src="https://via.placeholder.com/32"
            alt="User"
            className="w-8 h-8 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
