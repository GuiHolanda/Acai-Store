import Logo from "../assets/images/logo.png";
import { useSearchParams } from "react-router-dom";
import { LoginForm } from "../components/authentication/LoginForm";
import { SignupForm } from "../components/authentication/SignupForm";

export interface IUserData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export const AuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

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

        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};
