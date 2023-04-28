import { PersonCircle } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { CartButton } from "./cart/CartButton";

const DUMMY_NAV_LINKS = [
  { text: "Início", path: "/" },
  { text: "Açais", path: "/acais" },
  { text: "Bebidas", path: "/bebidas" },
  { text: "Hamburguers", path: "/hamburguers" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b text-light-gray">
      <div className="px-3 sm:px-8 py-2 sm:py-5">
        <div className="flex justify-between">
          <div className="flex gap-3 sm:gap-8 ali items-center">
            <button className="sm:hidden">
              <List className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <img
              src={Logo}
              alt="store logo"
              className="w-12 h-8 sm:w-16 sm:h-10"
            />
            <nav className="hidden sm:block">
              <ul className="flex gap-4 text-sm">
                {DUMMY_NAV_LINKS.map((link) => {
                  return (
                    <li
                      key={link.text}
                      className="hover:text-primary hover:font-semibold"
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "text-primary font-semibold" : ""
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex gap-3 sm:gap-8">
            <button
              type="button"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <PersonCircle className="text-primary hover:scale-105 h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};
