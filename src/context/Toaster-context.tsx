import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { generateUEID } from "../utils/functions";
import { Toaster } from "../components/UI/Toaster";
import ReactDOM from "react-dom";

export interface IToaster {
  id: string;
  content: string;
}

interface IToasterContext {
  open: (content: string) => void;
}

const portalElement = document.getElementById("overlays");

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ToastContext = createContext<IToasterContext>({ open: () => {} });

export const ToasterProvider = (props: PropsWithChildren) => {
  const [toasts, setToasts] = useState<IToaster[]>([]);

  const open = (content: string) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);

  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(() => ({ open }), []);

  if (portalElement) {
    return (
      <ToastContext.Provider value={contextValue}>
        {props.children}

        {ReactDOM.createPortal(
          <div className="toasts-wrapper">
            {toasts.map((toast) => (
              <Toaster onToasterClick={() => close(toast.id)} key={toast.id}>
                {toast.content}
              </Toaster>
            ))}
          </div>,
          portalElement
        )}
      </ToastContext.Provider>
    );
  } else return null;
};
