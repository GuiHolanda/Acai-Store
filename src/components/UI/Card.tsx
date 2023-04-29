import { useDispatch } from "react-redux";
import { Product } from "../../context/Products-context";
import { setProduct, toggleVisibility } from "../../store/productModalSlice";

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  product: Product;
}

export const Card = (props: CardProps) => {
  const dispatch = useDispatch();

  function cardClickHandler() {
    dispatch(toggleVisibility());
    dispatch(setProduct(props.product));
  }

  return (
    <div
      onClick={cardClickHandler}
      className="border flex flex-col gap-8 shadow-sm rounded-xl border-slate-100 min-h-[378px] w-[398px] hover:scale-[102%] cursor-pointer"
    >
      <img
        src={props.image}
        alt=""
        className="h-44 w-full object-cover rounded-t-xl"
      />
      <div className="flex flex-col flex-grow">
        <div className="px-5 mb-5 grow">
          <h3 className="text-lg mb-3">{props.title}</h3>
          <p className="text-sm text-zinc-500 mb-3">{props.description}</p>
        </div>

        <p className="text-green-600 px-5 pb-3">{props.price}</p>
      </div>
    </div>
  );
};
