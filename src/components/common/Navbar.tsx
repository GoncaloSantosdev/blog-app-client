import { NavLink } from "react-router-dom";
// Icons
import { Home, Compass, Bookmark, Bell, CirclePlus } from "lucide-react";

const iconClass = "w-[22px] h-[22px] stroke-[1.5px]";
const linkClass =
  "flex justify-center items-center w-10 h-10 hover:bg-gray-50 rounded-xl transition-colors duration-200";

const Navbar = () => {
  return (
    <ul className="space-y-8">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-50" : ""}`
          }
          title="Home"
        >
          {({ isActive }) => (
            <Home
              className={`${iconClass} ${
                isActive ? "text-primary-blue" : "text-gray-700"
              }`}
            />
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-50" : ""}`
          }
          title="Create Post"
        >
          {({ isActive }) => (
            <CirclePlus
              className={`${iconClass} ${
                isActive ? "text-primary-blue" : "text-gray-700"
              }`}
            />
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-50" : ""}`
          }
          title="Explore"
        >
          {({ isActive }) => (
            <Compass
              className={`${iconClass} ${
                isActive ? "text-primary-blue" : "text-gray-700"
              }`}
            />
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-50" : ""}`
          }
          title="Bookmarks"
        >
          {({ isActive }) => (
            <Bookmark
              className={`${iconClass} ${
                isActive ? "text-primary-blue" : "text-gray-700"
              }`}
            />
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-50" : ""}`
          }
          title="Notifications"
        >
          {({ isActive }) => (
            <Bell
              className={`${iconClass} ${
                isActive ? "text-primary-blue" : "text-gray-700"
              }`}
            />
          )}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
