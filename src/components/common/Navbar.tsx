import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

const iconClass = "w-6 h-6 md:w-5 md:h-5 stroke-[1.5px]";
const linkClass =
  "flex items-center gap-2.5 h-12 md:h-10 hover:bg-gray-50 rounded-lg transition-colors duration-200 md:px-4";

const Navbar = () => {
  return (
    <nav className="flex-1">
      <ul className="space-y-3">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "md:bg-blue-50 text-primary-blue font-medium"
                    : "text-gray-700"
                } justify-center md:justify-start`
              }
            >
              <link.icon className={iconClass} />
              <span className="hidden md:block text-sm">{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
