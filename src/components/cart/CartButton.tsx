import { Cart3 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsShowing } from "../../store/cartSlice";
import { RootState } from "../../store/store";

export const CartButton = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, isShowing } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <button
      type="button"
      id="cart-menu-button"
      aria-expanded={isShowing}
      aria-haspopup="true"
      className="flex items-center gap-2 hover:scale-105"
      onClick={() => dispatch(toggleIsShowing())}
    >
      <span className="sr-only">Open cart menu</span>
      <Cart3 className="text-primary h-4 w-4 sm:h-6 sm:w-6" />
      {cartItems.length > 0 && (
        <div>
          <p className="text-xs">
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="text-[10px]">
            {cartItems.length} {cartItems.length > 1 ? "itens" : "item"}
          </p>
        </div>
      )}
    </button>
  );
};
