import { Cart3 } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import Logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="bg-white border-b-2 text-zinc-500">
      <div className="px-8 py-5">
        <div className="flex justify-between">
          <div className="flex gap-8 ali items-center">
            <img src={Logo} alt="store logo" width={104} height={80} />
            <nav>
              <ul className="flex gap-4 text-sm">
                <li className="hover:text-purple-900 hover:font-semibold">
                  Início
                </li>
                <li className="hover:text-purple-900 hover:font-semibold">
                  Açais
                </li>
                <li className="hover:text-purple-900 hover:font-semibold">
                  Drinks
                </li>
                <li className="hover:text-purple-900 hover:font-semibold">
                  Hamburgues
                </li>
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
              <PersonCircle size={24} />
            </button>
            <button
              type="button"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open cart menu</span>
              <Cart3 size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
