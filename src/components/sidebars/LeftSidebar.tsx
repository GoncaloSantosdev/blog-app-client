import { useState } from "react";
// Components
import { Navbar } from "../";
// Icons
import { Feather, Sun, Moon, LogOut } from "lucide-react";

const bottomIconClass = "w-5 h-5 md:w-5 md:h-5 stroke-[1.5px]";
const linkClass =
  "flex items-center gap-2.5 h-10 md:hover:bg-gray-50 rounded-lg transition-colors duration-200";

const LeftSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col h-full p-6">
      {/* Logo and Brand */}
      <div className="mb-8 flex items-center justify-center md:justify-start">
        <Feather className="w-6 h-6 md:w-5 md:h-5 stroke-[1.5px] text-primary-blue" />
        <span className="hidden md:block text-lg font-semibold text-gray-900 ml-2">
          Blogify
        </span>
      </div>

      {/* User Profile */}
      <div className="mb-8">
        <div className="flex items-center justify-center md:justify-start gap-2.5 rounded-lg md:hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
          <img
            src="https://via.placeholder.com/32"
            alt="User"
            className="md:w-8 md:h-8 rounded-full ring-gray-100"
          />
          <div className="hidden md:block flex-1 truncate">
            <h3 className="font-medium text-gray-900 text-sm">John Doe</h3>
            <p className="text-xs text-gray-500">@johndoe</p>
          </div>
        </div>
      </div>

      {/* Navigation Component */}
      <Navbar />

      {/* Bottom Section */}
      <div className="space-y-4 mt-auto">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`${linkClass} text-gray-700 w-full justify-center md:justify-start`}
        >
          {isDarkMode ? (
            <>
              <Sun className={bottomIconClass} />
              <span className="hidden md:block text-sm">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className={bottomIconClass} />
              <span className="hidden md:block text-sm">Dark Mode</span>
            </>
          )}
        </button>
        <button
          className={`${linkClass} text-red-600 w-full justify-center md:justify-start`}
        >
          <LogOut className={bottomIconClass} />
          <span className="hidden md:block text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
