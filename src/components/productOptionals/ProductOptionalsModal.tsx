import { useDispatch, useSelector } from "react-redux";
import {
  addOrderQtd,
  removeOrderQtd,
  resetOrder,
  toggleVisibility,
  updatePrice,
} from "../../store/productModalSlice";
import { XLg } from "react-bootstrap-icons";
import { RootState } from "../../store/store";
import { QuantityButton } from "./QuantityButton";
import { Optional } from "./Optional";
import { useState } from "react";

export const ProductOptionalsModal = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.productModal.product);
  const totalPrice = useSelector(
    (state: RootState) => state.productModal.totalPrice
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [optionals, setOptionals] = useState(
    product.optionals
      ?.filter((optional) => optional.isMandatory)
      .map((optional) => ({ optionalName: optional.name, isValid: false }))
  );

  function optionalChangeHandler(information: {
    selectedValue: string;
    optionalHeader: string;
  }) {
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

    const selectedOptionalPrice = product.optionals
      ?.find((optional) => optional.name === information.optionalHeader)
      ?.options.find(
        (option) => option.name === information.selectedValue
      )?.price;

    if (selectedOptionalPrice) {
      dispatch(updatePrice(selectedOptionalPrice));
    }
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

  //const formIsValid = optionals?.every((optional) => optional.isValid === true);

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
          <p className="font-light">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
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
                      optionalHeader={optional.name}
                      key={option.name}
                      title={option.name}
                      description={option.description}
                      price={option.price}
                      onChange={optionalChangeHandler}
                    />
                  ))}
                {!optional.isMandatory &&
                  optional.options.map((option) => (
                    <Optional.Qtd
                      key={option.name}
                      title={option.name}
                      description={option.description}
                      price={option.price}
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
          <button className="flex sm: w-48 lg:w-64 h-12 items-center justify-between bg-primary text-white font-semibold px-5 rounded-md">
            <span className="text-sm">Adicionar</span>
            <span className="text-sm">{totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
