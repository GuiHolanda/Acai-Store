import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export const Backdrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="fixed top-[81px] bg-neutral-900/25 right-0 w-full h-full"
      onClick={onClick}
    ></div>
  );
};

export const ModalOverlay = (props: PropsWithChildren) => {
  return (
    <div className="fixed top-[20vh] left-[20%] w-[60%] h-[60vh] bg-white p-4 rounded shadow-md z-10">
      <div>{props.children}</div>
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
