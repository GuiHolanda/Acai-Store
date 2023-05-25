import { LabelHTMLAttributes, ReactNode } from "react";

export interface IFormGroupRoot {
  children: ReactNode;
}

export const FormGroupRoot = (props: IFormGroupRoot) => {
  return <div className="flex flex-col gap-3">{props.children}</div>;
};

export const FormGroupLabel = (
  props: LabelHTMLAttributes<HTMLLabelElement>
) => {
  return <label>{props.children}</label>;
};

export const FormGroup = {
  Root: FormGroupRoot,
  Label: FormGroupLabel,
};
