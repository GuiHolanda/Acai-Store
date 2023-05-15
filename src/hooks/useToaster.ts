import { useContext } from "react";
import { ToastContext } from "../context/Toaster-context";

export const useToast = () => useContext(ToastContext);
