import { Cart3 } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const DUMMY_NAV_LINKS = [
  { text: "Início", path: "/" },
  { text: "Açais", path: "/acais" },
  { text: "Bebidas", path: "/bebidas" },
  { text: "Hamburguers", path: "/hamburguers" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b-2 text-light-gray">
      <div className="px-8 py-5">
        <div className="flex justify-between">
          <div className="flex gap-8 ali items-center">
            <button className="sm:hidden">
              <List size={24} />
            </button>
            <img src={Logo} alt="store logo" width={104} height={80} />
            <nav className="hidden sm:block">
              <ul className="flex gap-4 text-sm">
                {DUMMY_NAV_LINKS.map((link) => {
                  return (
                    <li className="hover:text-primary hover:font-semibold">
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

          <div className="flex gap-8">
            <button
              type="button"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <PersonCircle
                size={24}
                className="text-primary hover:scale-105"
              />
            </button>
            <button
              type="button"
              id="cart-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open cart menu</span>
              <Cart3 size={24} className="text-primary hover:scale-105" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
