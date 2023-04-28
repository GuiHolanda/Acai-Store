import { Cart3 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { toggleIsShowing } from "../../store/cartSlice";

export const CartButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      id="cart-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
      onClick={() => dispatch(toggleIsShowing())}
    >
      <span className="sr-only">Open cart menu</span>
      <Cart3 className="text-primary hover:scale-105 h-4 w-4 sm:h-6 sm:w-6" />
    </button>
  );
};
