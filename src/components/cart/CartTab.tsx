import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { CartItem } from "./CartItem";
import { XLg } from "react-bootstrap-icons";
import { toggleIsShowing } from "../../store/cartSlice";
import { Backdrop } from "../UI/Modal";

export const CartTab = () => {
  const isShowing = useSelector((state: RootState) => state.cart.isShowing);
  const dispatch = useDispatch();

  if (isShowing) {
    return (
      <>
        <Backdrop
          onClick={() => dispatch(toggleIsShowing())}
          className="top-[81px]"
        />

        <div className="fixed flex flex-col py-4 bg-white right-0 top-0 sm:top-[81px] bottom-0 sm:w-[472px] z-20">
          <header className="mb-5 px-6 sm:px-11 flex items-center justify-between">
            <h2 className="text-2xl">Seu Carrinho</h2>
            <button
              onClick={() => dispatch(toggleIsShowing())}
              className="sm:translate-x-5"
            >
              <XLg />
            </button>
          </header>

          <section className="px-6 sm:px-11 h-96 sm:h-[580px] overflow-auto">
            <CartItem />
            <CartItem />
            <CartItem />
          </section>

          <footer className="flex flex-col grow px-6 sm:px-11">
            <div className="py-5 border-t grow ">
              <div className="flex justify-between">
                <p className="text-light-gray text-sm">Subtotal</p>
                <p className="text-light-gray ">R$ 85,00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-light-gray text-sm">Taxa de entrega</p>
                <p className="text-light-gray">R$ 6,00</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg">Total</p>
              <p>R$ 91,99</p>
            </div>
            <a
              href="/"
              className="bg-primary block text-center font-semibold hover:bg-purple-800 text-white px-5 rounded py-2 mt-3"
            >
              Escolher forma de pagamento
            </a>
          </footer>
        </div>
      </>
    );
  } else {
    return null;
  }
};
