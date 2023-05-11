import { PersonCircle, XLg } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { CartButton } from "../cart/CartButton";
import { useState } from "react";

const DUMMY_NAV_LINKS = [
  { text: "Início", path: "/" },
  { text: "Açais", path: "/acais" },
  { text: "Bebidas", path: "/bebidas" },
  { text: "Hamburguers", path: "/hamburguers" },
];

export const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);

  function toggleMobileMenuVisibility() {
    setIsMobileMenuVisible((prevState) => !prevState);
  }

  return (
    <header className="fixed left-0 w-full top-0 bg-white border-b text-light-gray z-10">
      <div className="px-3 sm:px-8 py-2 sm:py-5">
        <div className="flex justify-between">
          <div className="flex gap-3 sm:gap-8 ali items-center">
            <button
              className="sm:hidden hover:scale-105"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuVisible}
              onClick={toggleMobileMenuVisibility}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuVisible ? (
                <XLg className="h-4 w-4 sm:h-6 sm:w-6" />
              ) : (
                <List className="h-4 w-4 sm:h-6 sm:w-6" />
              )}
            </button>
            <img
              src={Logo}
              alt="store logo"
              className="w-12 h-8 sm:w-16 sm:h-10"
            />
            <nav>
              <ul className="hidden sm:flex gap-4 text-sm">
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

              <div
                className={`${
                  isMobileMenuVisible ? "flex" : "hidden"
                } sm:hidden`}
                id="mobile-menu"
              >
                <ul className="flex flex-col absolute bg-white w-full left-0 divide-y top-[48px] z-[1000] px-4 pb-3 pt-2 gap-2">
                  {DUMMY_NAV_LINKS.map((link) => (
                    <li
                      key={link.text}
                      className="p-2 hover:text-primary hover:font-semibold"
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
                  ))}
                </ul>
              </div>
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
