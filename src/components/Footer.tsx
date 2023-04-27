import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import Logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <footer>
      <section className="border-t  pt-10 pb-3">
        <h2 className="text-xl mb-8">Nossas lojas</h2>
        <ul className="grid grid-cols-4 text-zinc-500 mb-8 gap-4">
          <li>
            <a href="/" className="hover:text-zinc-700">
              Belo Horizonte
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-zinc-700">
              Brasília
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-zinc-700">
              Campinas
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-zinc-700">
              Curitiba
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-zinc-700">
              Goiânia
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-zinc-700">
              Guarulhos
            </a>
          </li>
        </ul>
      </section>

      <section className="border-t  pt-10 pb-3">
        <div className="grid grid-cols-4">
          <div>
            <h2 className="text-xl mb-8">Açai</h2>
            <ul className="grid grid-cols-1 text-zinc-500 mb-8 gap-4">
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Site Institucional
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-8">Descubra</h2>
            <ul className="grid grid-cols-1 text-zinc-500 mb-8 gap-4">
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Belo Horizonte
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Brasília
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  Campinas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-8">Social</h2>
            <ul className="flex text-zinc-500 mb-8 gap-4">
              <li>
                <a href="/" className="hover:text-zinc-700">
                  <Facebook size={30} />
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  <Twitter size={30} />
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  <Youtube size={30} />
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-zinc-700">
                  <Instagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t py-10 grid grid-cols-2 items-center gap-4">
        <div className="grid grid-rows-2 grid-flow-col gap-x-4 items-center">
          <a href="/" className="row-span-2">
            <img src={Logo} alt="store logo" width={78} height={60} />
          </a>
          <p className="text-xs text-zinc-500">
            © Copyright 2023 - Açai - Todos os direitos reservados Açai com
            Agência de Restaurantes Online S.A.
          </p>
          <p className="text-xs text-zinc-500">
            CNPJ 16.883.256/0001-91 / Avenida dos Motoristas, nº 122, Vila
            Maria, Niteroi/Rj - CEP 08.062-902
          </p>
        </div>
        <div>
          <ul className="flex gap-4 text-zinc-500">
            <li>
              <a href="/" className="hover:text-zinc-700">
                Termos e condições de uso
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-zinc-700">
                Código de Conduta
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-zinc-700">
                Privacidade
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-zinc-700">
                Dicas de segurança
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
