import { useState } from "react";
import { DashLg, PlusLg } from "react-bootstrap-icons";

interface ComponentProps {
  border?: boolean;
  initialValue?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export const QuantityButton = ({
  border = false,
  initialValue = 0,
  onIncrease,
  onDecrease,
}: ComponentProps) => {
  const [qtd, setQtd] = useState(initialValue);
  const borderClass = border ? "border" : "";

  function increaseQtd() {
    setQtd((prevValue) => prevValue + 1);
    if (onIncrease) {
      onIncrease();
    }
  }

  function decreaseQtd() {
    setQtd((prevValue) => prevValue - 1);
    if (onDecrease) {
      onDecrease();
    }
  }
  return (
    <div
      className={`flex w-28 h-12 justify-between items-center ${borderClass} py-4 px-2 rounded`}
    >
      <button
        className="text-primary disabled:hidden"
        onClick={decreaseQtd}
        disabled={qtd === initialValue}
      >
        <DashLg />
      </button>
      <span className={`text-lg ${qtd === 0 ? "hidden" : ""} ml-auto`}>
        {qtd}
      </span>
      <button className="text-primary ml-auto" onClick={increaseQtd}>
        <PlusLg />
      </button>
    </div>
  );
};
