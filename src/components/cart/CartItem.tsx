import { useDispatch } from "react-redux";
import { ICartItem, removeItemFromCart } from "../../store/cartSlice";

interface ICartItemProps {
  item: ICartItem;
}

export const CartItem = (props: ICartItemProps) => {
  const { name, optionals, price, qtd } = props.item;
  const dispatch = useDispatch();

  function removeItemFromCartHandler() {
    dispatch(removeItemFromCart(props.item));
  }

  return (
    <div className="py-4 border-t">
      <div className="flex justify-between my-2">
        <p>
          {qtd}x {name}
        </p>
        <p className="whitespace-nowrap">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <p className="text-sm text-light-gray my-2">
        {optionals.map((optional) => `${optional.qtd}x ${optional.name}, `)}
      </p>
      <div className="flex gap-4">
        <button className="text-primary font-semibold text-sm">Editar</button>
        <button
          className="text-light-gray text-sm"
          onClick={removeItemFromCartHandler}
        >
          Remover
        </button>
      </div>
    </div>
  );
};
