import { Envelope, ShieldLock } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup } from "../UI/FormGroup";
import { InputGroup } from "../UI/Input";
import { Loader } from "../UI/Loader";
import { useRef } from "react";
import useHttp, { IRequestConfig } from "../../hooks/useHttp";

export const SignupForm = () => {
  const navigate = useNavigate();
  const { isLoading, error, sendRequest } = useHttp();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const API_KEY = "AIzaSyC4J36IRMlupBuyhxaniDNl21PgMCU8xQg";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUpWithPassword?key=${API_KEY}`;

  function formSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current?.value,
      password: passwordInputRef.current?.value,
      returnSecureToken: true,
    };
    const requestConfig: IRequestConfig = {
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    };

    function applyData<IUserData>(data: IUserData) {
      console.log(data);
      navigate("/");
    }
    sendRequest(requestConfig, applyData);
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
      <FormGroup.Root>
        <FormGroup.Label htmlFor="email">Seu e-mail</FormGroup.Label>
        <InputGroup.Root>
          <InputGroup.Icon>
            <Envelope className="w-full h-auto" />
          </InputGroup.Icon>
          <InputGroup.Input
            ref={emailInputRef}
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
            ref={passwordInputRef}
            type="password"
            id="password"
            placeholder="*********"
          />
        </InputGroup.Root>
      </FormGroup.Root>

      {!isLoading && error && (
        <p className="text-red-500 text-xs text-center">{error.message}</p>
      )}

      {isLoading && !error && (
        <p className=" text-xs text-center flex items-center mx-auto">
          <Loader />
        </p>
      )}

      <button
        type="submit"
        className="bg-primary px-4 py-2 w-full rounded-lg text-white font-semibold hover:scale-[105%]"
      >
        Criar Conta
      </button>
      <div className="flex flex-col gap-1 text-center underline underline-offset-2 text-light-gray">
        <Link to="?mode=login">Já possui conta ? Faça o login aqui</Link>
      </div>
    </form>
  );
};
