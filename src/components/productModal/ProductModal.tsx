import { useDispatch, useSelector } from "react-redux";
import {
  addOrderQtd,
  removeOrderQtd,
  resetOrder,
  toggleVisibility,
} from "../../store/productModalSlice";
import { XLg } from "react-bootstrap-icons";
import { RootState } from "../../store/store";
import { QuantityButton } from "./QuantityButton";
import { ISelectedOption, Optional } from "./Optional";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/Products-context";
import { ICartItem, addItemToCart } from "../../store/cartSlice";
import { useToast } from "../../hooks/useToaster";

export const ProductModal = () => {
  const dispatch = useDispatch();
  const toaster = useToast();
  const { products } = useContext(ProductsContext);
  const product = useSelector((state: RootState) => state.productModal.product);
  const totalQtd = useSelector(
    (state: RootState) => state.productModal.totalQtd
  );

  const productPrice = products
    .find((prod) => prod.title === product.title)
    ?.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const selectedOptions = useSelector(
    (state: RootState) => state.productModal.selectedOptionals
  );
  const totalPrice = useSelector(
    (state: RootState) => state.productModal.totalPrice
  );

  const [optionals, setOptionals] = useState(
    product.optionals
      ?.filter((optional) => optional.isMandatory)
      .map((optional) => ({ optionalName: optional.name, isValid: false }))
  );

  function optionalChangeHandler(information: ISelectedOption) {
    setOptionals((prevState) => {
      const selectedOptionalIndex = prevState?.findIndex(
        (optional) => optional.optionalName === information.optionalHeader
      );

      return prevState?.map((optional, index) => {
        if (index === selectedOptionalIndex) {
          return { ...optional, isValid: true };
        } else {
          return { ...optional };
        }
      });
    });
  }

  function increaseOrderQtdHandler() {
    dispatch(addOrderQtd());
  }

  function decreaseOrderQtdHandler() {
    dispatch(removeOrderQtd());
  }

  function closeModalHandler() {
    dispatch(toggleVisibility());
    dispatch(resetOrder());
  }

  const formIsValid = optionals?.every((optional) => optional.isValid === true);

  function addToCartHandler() {
    const cartItem: ICartItem = {
      name: product.title,
      qtd: totalQtd,
      optionals: selectedOptions,
      price: totalPrice,
    };

    if (formIsValid) {
      dispatch(addItemToCart(cartItem));
      closeModalHandler();
    } else {
      toaster.open(
        "É preciso escolher todos os itens obrigatórios antes de adicionar o prato à sacola."
      );
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 lg:gap-5 h-full">
      <div className="flex order-1 md:order-none mx-auto items-center md:w-1/2 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="rounded h-full w-auto object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 md:w-1/2 grow md:grow-0">
        <header className="flex items-center justify-between">
          <h2 className="text-sm text-center mx-auto">{product.title}</h2>
          <button onClick={closeModalHandler} className="sm:-translate-y-1">
            <XLg size={20} />
          </button>
        </header>

        <div className="px-10">
          <p className="text-light-gray">{product.description}</p>
          <p className="my-2">Serve 1 pessoa</p>
          <p className="font-light">{productPrice}</p>
        </div>

        <main className="max-h-72 lg:max-h-80 overflow-auto ">
          {product.optionals?.map((optional) => {
            return (
              <Optional.Root key={optional.name}>
                <Optional.Header
                  key={optional.name}
                  title={optional.name}
                  instruction={optional.description}
                  required={optional.isMandatory}
                  isValid={
                    optionals?.find(
                      (option) => option.optionalName === optional.name
                    )?.isValid
                  }
                />
                {optional.isMandatory &&
                  optional.options.map((option) => (
                    <Optional.Radio
                      key={option.name}
                      optional={optional}
                      option={option}
                      onChange={optionalChangeHandler}
                    />
                  ))}
                {!optional.isMandatory &&
                  optional.options.map((option) => (
                    <Optional.Qtd
                      key={option.name}
                      optional={optional}
                      option={option}
                    />
                  ))}
              </Optional.Root>
            );
          })}
          <div className="px-10 flex flex-col gap-3 my-10">
            <label htmlFor="coments" className="text-light-gray">
              Algum Comentário ?
            </label>
            <textarea
              name="coments"
              id="coments"
              cols={30}
              rows={3}
              maxLength={140}
              className="border w-full p-5"
              placeholder="Ex: tirar a cebola, maionese à parte etc."
            ></textarea>
          </div>
        </main>

        <div className="flex gap-4 items-center justify-center lg:justify-end mt-auto">
          <QuantityButton
            border
            initialValue={1}
            onIncrease={increaseOrderQtdHandler}
            onDecrease={decreaseOrderQtdHandler}
          />
          <button
            className={`flex sm: w-48 lg:w-64 h-12 items-center justify-between ${
              formIsValid ? "bg-primary" : "bg-purple-200"
            } text-white font-semibold px-5 rounded-md`}
            onClick={addToCartHandler}
          >
            <span className="text-sm">Adicionar</span>
            <span className="text-sm">
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
