import { CheckLg } from "react-bootstrap-icons";
import { QuantityButton } from "./QuantityButton";
import { useDispatch } from "react-redux";
import {
  addOptionalToPrice,
  removeOptionalToPrice,
} from "../../store/productModalSlice";

interface OptionalHeaderProps {
  title: string;
  instruction: string;
  isValid: boolean | undefined;
  required: boolean;
}

interface OptionalItemRadioProps {
  title: string;
  description?: string;
  price?: number;
  onChange: (information: {
    selectedValue: string;
    optionalHeader: string;
  }) => void;
  optionalHeader: string;
}

interface OptionalItemQtdProps {
  title: string;
  description?: string;
  price?: number;
}

interface OptionalRootProps {
  children: React.ReactNode;
}

const OptionalHeader = (props: OptionalHeaderProps) => {
  const { title, instruction, isValid, required } = props;
  return (
    <div className="sticky top-0 flex justify-between items-center bg-purple-50 px-10 py-3">
      <div>
        <p>{title}</p>
        <p className="text-sm text-light-gray">{instruction}</p>
      </div>
      <div className="bg-primary text-white p-1 rounded">
        {!isValid && required && <p className="text-xs">OBRIGATÓRIO</p>}
        {!isValid && !required && <CheckLg />}
        {isValid && required && <CheckLg />}
      </div>
    </div>
  );
};

const OptionalItemRadio = (props: OptionalItemRadioProps) => {
  const { title, description, price, onChange, optionalHeader } = props;

  function radioChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const selectedValue = event.currentTarget.value;
    onChange({ selectedValue, optionalHeader });
  }
  return (
    <div className="flex justify-between items-center border-b border-slate-100 py-4 px-10">
      <label htmlFor="garnish-radio-01">
        <p className="font-light">{title}</p>
        <p className="text-light-gray font-light">{description}</p>
        <p className="font-light">
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </label>
      <input
        type="radio"
        name={optionalHeader}
        className="w-6 h-6 accent-primary"
        onChange={radioChangeHandler}
        value={title}
      />
    </div>
  );
};

const OptionalItemQtd = (props: OptionalItemQtdProps) => {
  const { title, description, price } = props;
  const dispatch = useDispatch();

  function increaseHandler() {
    if (price) {
      dispatch(addOptionalToPrice(price));
    }
  }

  function decreaseHandler() {
    if (price) {
      dispatch(removeOptionalToPrice(price));
    }
  }

  return (
    <div className="flex justify-between items-center border-b  border-slate-100 py-4 px-10">
      <label htmlFor="garnish-radio-01">
        <p className="font-light">{title}</p>
        <p className="text-light-gray font-light">{description}</p>
        <p className="font-light">
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </label>
      <QuantityButton
        onIncrease={increaseHandler}
        onDecrease={decreaseHandler}
      />
    </div>
  );
};

const OptionalRoot = (props: OptionalRootProps) => {
  return <>{props.children}</>;
};

OptionalHeader.displayName = "Optional.Header";
OptionalItemRadio.displayName = "Optional.Radio";
OptionalItemQtd.displayName = "Optional.Qtd";

export const Optional = {
  Root: OptionalRoot,
  Header: OptionalHeader,
  Radio: OptionalItemRadio,
  Qtd: OptionalItemQtd,
};
