import { Envelope, ShieldLock } from "react-bootstrap-icons";
import Logo from "../assets/images/logo.png";
import { InputGroup } from "../components/UI/Input";
import { FormGroup } from "../components/UI/FormGroup";

export const LoginPage = () => {
  return (
    <div className="flex h-full">
      <div className="max-w-md shadow-md rounded p-10 mx-auto my-auto">
        <img
          src={Logo}
          alt="store logo"
          className="w-12 h-8 sm:w-36 sm:h-auto mx-auto mb-10"
        />
        <h2 className="text-4xl text-gray-600 text-center mb-3">
          Falta pouco para matar sua fome!
        </h2>

        <h4 className="text-light-gray font-light text-center mb-10">
          Faça login para poder finalizer os seus pedidos
        </h4>

        <form className="flex flex-col gap-4">
          <FormGroup.Root>
            <FormGroup.Label htmlFor="email">Seu e-mail</FormGroup.Label>
            <InputGroup.Root>
              <InputGroup.Icon>
                <Envelope className="w-full h-auto" />
              </InputGroup.Icon>
              <InputGroup.Input
                type="text"
                id="email"
                placeholder="seuemail@exemplo.com"
              />
            </InputGroup.Root>
          </FormGroup.Root>

          <FormGroup.Root>
            <FormGroup.Label htmlFor="email">Sua senha</FormGroup.Label>
            <InputGroup.Root>
              <InputGroup.Icon>
                <ShieldLock className="w-full h-auto" />
              </InputGroup.Icon>
              <InputGroup.Input
                type="password"
                id="password"
                placeholder="*********"
              />
            </InputGroup.Root>
          </FormGroup.Root>
          <button className="bg-primary px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]">
            Login
          </button>
          <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray">
            <a href="">Esqueceu sua senha ?</a>
            <a href="">Não possui conta ? Crie uma agora</a>
          </div>
        </form>
      </div>
    </div>
  );
};
