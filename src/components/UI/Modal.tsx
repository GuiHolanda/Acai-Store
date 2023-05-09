import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  onClick: () => void;
  className?: string;
}

export const Backdrop = ({ onClick, className }: BackdropProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full z-10 bg-neutral-900/25 ${className}`}
      onClick={onClick}
    ></div>
  );
};

export const ModalOverlay = (props: PropsWithChildren) => {
  return (
    <div className="fixed top-0 md:top-[20vh] lef-0 lg:left-[5%] xl:left-[15%]  w-full lg:w-[90%] xl:w-[70%] h-full md:h-[58vh] bg-white p-4 rounded shadow-md z-20">
      {props.children}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
}

const portalElement = document.getElementById("overlays");

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  if (portalElement) {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClose} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </>
    );
  } else {
    return null;
  }
};
