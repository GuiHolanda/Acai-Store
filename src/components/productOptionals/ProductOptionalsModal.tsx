import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../../store/productModalSlice";
import { XLg } from "react-bootstrap-icons";
import { RootState } from "../../store/store";
import { OptionalsItemRadio } from "./OptionalsItemRadio";
import { OptionalsItemHeader } from "./OptionalsItemHeader";
import { QuantityButton } from "./QuantityButton";
import { OptionalsItemQtd } from "./OptionalsItemQtd";

export const ProductOptionalsModal = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.productModal.product);
  return (
    <div className="flex flex-col lg:flex-row h-full gap-5">
      <img
        src={product.image}
        alt=""
        className="w-1/2 mx-auto object-cover order-1 lg:order-none rounded"
      />

      <div className="flex flex-col gap-5 w-full grow">
        <header className="flex items-center justify-between w-full">
          <h2 className="text-sm text-center mx-auto">{product.title}</h2>
          <button
            onClick={() => dispatch(toggleVisibility())}
            className="sm:-translate-y-1"
          >
            <XLg size={20} />
          </button>
        </header>

        <main className="grow">
          <div className="px-10">
            <p className="text-light-gray">Acompanha uma porção</p>
            <p className="my-2">Serve 1 pessoa</p>
            <p className="font-light my-3">A partir de R$ 25,91</p>
          </div>

          <div className="max-h-80 overflow-auto">
            <OptionalsItemHeader
              title="Como prefere?"
              instruction="Escolha 1 opção."
              requiredLabel="OBRIGATÓRIO"
            />
            <OptionalsItemRadio
              title="Brasil com bananas e morangos"
              description="Com morangos e bananas fatiadas."
              price="R$ 27,30"
            />
            <OptionalsItemRadio
              title="Brasil com morangos"
              description="Com morangos fatiados."
              price="R$ 27,30"
            />
            <OptionalsItemRadio title="Com banana fatiada" price="R$ 23,40" />
            <OptionalsItemRadio title="Sem fruta" price="R$ 23,40" />

            <OptionalsItemHeader
              title="Escolha a porção:"
              instruction="Escolha 1 opção."
              requiredLabel="OBRIGATÓRIO"
            />
            <OptionalsItemRadio title="Granola" />
            <OptionalsItemRadio title="Farinha Láctea" />
            <OptionalsItemRadio title="Leite condensado" />
            <OptionalsItemRadio title="Leite em pó" />
            <OptionalsItemRadio title="Farinha de tapioca" />
            <OptionalsItemRadio title="Paçoca" />

            <OptionalsItemHeader
              title="Deseja Adicionar algo?"
              instruction="Escolha até 20 opções."
              requiredLabel="Optional"
            />
            <OptionalsItemQtd title="Morango" price="R$ 8,00" />
            <OptionalsItemQtd title="Banana" price="R$ 4,00" />
            <OptionalsItemQtd title="Kiwi" price="R$ 8,00" />
            <OptionalsItemQtd title="Granola" price="R$ 5,00" />
            <OptionalsItemQtd title="Paçoca" price="R$ 2,00" />
            <OptionalsItemQtd title="Leite em pó" price="R$ 5,00" />
            <OptionalsItemQtd title="Leite condensado" price="R$ 5,00" />
            <OptionalsItemQtd title="Mel" price="R$ 8,00" />
          </div>
        </main>

        <div className="flex gap-4 items-center justify-center lg:justify-end">
          <QuantityButton border initialValue={1} />
          <button className="flex w-64 h-12 items-center justify-between bg-primary text-white font-semibold px-5 rounded-md">
            <span className="text-sm">Adicionar</span>
            <span className="text-sm">R$ 2,51</span>
          </button>
        </div>
      </div>
    </div>
  );
};
