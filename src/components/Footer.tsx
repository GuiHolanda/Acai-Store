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
        <ul className="grid grid-cols-2 sm:grid-cols-4 text-light-gray mb-8 gap-4">
          <li>
            <a href="/" className="hover:text-dark-gray">
              Belo Horizonte
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Brasília
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Campinas
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Curitiba
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Goiânia
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Guarulhos
            </a>
          </li>
        </ul>
      </section>

      <section className="border-t  pt-10 pb-3">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <div>
            <h2 className="text-xl mb-8">Açai</h2>
            <ul className="grid grid-cols-1 text-light-gray mb-8 gap-4">
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Site Institucional
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-8">Descubra</h2>
            <ul className="grid grid-cols-1 text-light-gray mb-8 gap-4">
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Belo Horizonte
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Brasília
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-dark-gray">
                  Campinas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl mb-8">Social</h2>
            <ul className="flex text-light-gray mb-8 gap-4">
              <li>
                <a href="/">
                  <Facebook
                    size={30}
                    className="text-primary hover:scale-105"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <Twitter size={30} className="text-primary hover:scale-105" />
                </a>
              </li>
              <li>
                <a href="/">
                  <Youtube size={30} className="text-primary hover:scale-105" />
                </a>
              </li>
              <li>
                <a href="/">
                  <Instagram
                    size={30}
                    className="text-primary hover:scale-105"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t py-10 grid grid-cols-1 sm:grid-cols-2 items-center gap-8 sm:gap-4">
        <ul className="flex flex-wrap justify-center sm:order-2 gap-4 mx-auto text-zinc-500">
          <li>
            <a href="/" className="hover:text-dark-gray">
              Termos e condições de uso
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Código de Conduta
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Privacidade
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-dark-gray">
              Dicas de segurança
            </a>
          </li>
        </ul>
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
      </section>
    </footer>
  );
};
