import { ExclamationOctagon } from "react-bootstrap-icons";
import { useTimeout } from "../../hooks/useTimeout";
interface IToasterProps {
  children: React.ReactNode;
  onToasterClick: () => void;
}
export const Toaster = (props: IToasterProps) => {
  const { children, onToasterClick } = props;

  useTimeout(onToasterClick, 2000);

  return (
    <div
      className="fixed flex items-center top-0 z-30 bg-primary w-full h-20 gap-3 justify-center"
      onClick={onToasterClick}
    >
      <ExclamationOctagon className="text-white h-4 w-4 sm:h-6 sm:w-6" />
      <h3 className="text-white font-semibold text-xl ">{children}</h3>
    </div>
  );
};
