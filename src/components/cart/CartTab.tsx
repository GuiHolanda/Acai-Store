import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { CartItem } from "./CartItem";
import { XLg } from "react-bootstrap-icons";
import { toggleIsShowing } from "../../store/cartSlice";
import { Backdrop } from "../UI/Modal";
import emptyCart from "../../assets/images/empty-cart.png";

export const CartTab = () => {
  const { cartItems, totalPrice, isShowing } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const deliberyFee = 6;

  let cartTabContent = (
    <section className="flex flex-col gap-10 my-auto">
      <img src={emptyCart} alt="Empty cart" className="w-60 mx-auto " />
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-light-gray font-semibold">
          Seu carrinho está vazio
        </h3>
        <p className="text-sm text-slate-500">Adicione items</p>
      </div>
    </section>
  );

  if (cartItems.length > 0) {
    cartTabContent = (
      <>
        <section className="px-6 sm:px-11 h-96 sm:h-[580px] overflow-auto">
          {cartItems.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}
        </section>

        <footer className="flex flex-col grow px-6 sm:px-11">
          <div className="py-5 border-t grow ">
            <div className="flex justify-between">
              <p className="text-light-gray text-sm">Subtotal</p>
              <p className="text-light-gray ">
                {totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-light-gray text-sm">Taxa de entrega</p>
              <p className="text-light-gray">
                {deliberyFee.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg">Total</p>
            <p>
              {(totalPrice + deliberyFee).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <a
            href="/"
            className="bg-primary block text-center font-semibold hover:bg-purple-800 text-white px-5 rounded py-2 mt-3"
          >
            Escolher forma de pagamento
          </a>
        </footer>
      </>
    );
  }

  if (isShowing) {
    return (
      <>
        <Backdrop
          onClick={() => dispatch(toggleIsShowing())}
          className="sm:top-[81px]"
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

          {cartTabContent}
        </div>
      </>
    );
  } else {
    return null;
  }
};
