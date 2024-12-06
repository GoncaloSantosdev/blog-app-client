import { NavLink } from "react-router-dom";
import { Home, Compass, Users, Bookmark, CirclePlus } from "lucide-react";

const iconClass = "w-5 h-5 stroke-[1.5px]";
const linkClass =
  "flex items-center gap-2.5 h-10 hover:bg-gray-50 rounded-lg transition-colors duration-200 px-2";

const Navbar = () => {
  return (
    <nav className="flex-1">
      <ul className="space-y-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-50 text-primary-blue font-medium"
                  : "text-gray-700"
              } justify-center md:justify-start`
            }
          >
            <Home className={iconClass} />
            <span className="hidden md:block text-sm">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-50 text-primary-blue font-medium"
                  : "text-gray-700"
              } justify-center md:justify-start`
            }
          >
            <Compass className={iconClass} />
            <span className="hidden md:block text-sm">Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-50 text-primary-blue font-medium"
                  : "text-gray-700"
              } justify-center md:justify-start`
            }
          >
            <Users className={iconClass} />
            <span className="hidden md:block text-sm">People</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-50 text-primary-blue font-medium"
                  : "text-gray-700"
              } justify-center md:justify-start`
            }
          >
            <Bookmark className={iconClass} />
            <span className="hidden md:block text-sm">Saved</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-50 text-primary-blue font-medium"
                  : "text-gray-700"
              } justify-center md:justify-start`
            }
          >
            <CirclePlus className={iconClass} />
            <span className="hidden md:block text-sm">Create Post</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
