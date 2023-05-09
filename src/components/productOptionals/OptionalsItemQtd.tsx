import { QuantityButton } from "./QuantityButton";

interface ComponentProps {
  title: string;
  description?: string;
  price?: string;
}

export const OptionalsItemQtd = (props: ComponentProps) => {
  const { title, description, price } = props;
  return (
    <div className="flex justify-between items-center border-b py-4 px-10">
      <label htmlFor="garnish-radio-01">
        <p className="font-light">{title}</p>
        <p className="text-light-gray font-light">{description}</p>
        <p className="font-light">{price}</p>
      </label>
      <QuantityButton />
    </div>
  );
};
