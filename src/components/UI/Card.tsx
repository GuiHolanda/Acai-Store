import { useDispatch } from "react-redux";
import { Product } from "../../context/Products-context";
import { setProduct, toggleVisibility } from "../../store/productModalSlice";

export const Card = ({ product }: { product: Product }) => {
  const { title, image, description, price } = product;
  const dispatch = useDispatch();

  function cardClickHandler() {
    dispatch(toggleVisibility());
    dispatch(setProduct(product));
  }

  return (
    <div
      onClick={cardClickHandler}
      className="border flex flex-col gap-8 shadow-sm rounded-xl border-slate-100 min-h-[378px] sm:w-[398px] hover:scale-[102%] cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="h-44 w-full object-cover rounded-t-xl"
      />
      <div className="flex flex-col flex-grow">
        <div className="px-5 mb-5 grow">
          <h3 className="text-lg mb-3">{title}</h3>
          <p className="text-sm text-zinc-500 mb-3">{description}</p>
        </div>

        <p className="text-green-600 px-5 pb-3">{price}</p>
      </div>
    </div>
  );
};
