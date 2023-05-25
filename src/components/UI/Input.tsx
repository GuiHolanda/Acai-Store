import React, { InputHTMLAttributes, ReactNode } from "react";

export interface IInputRootProps {
  children: ReactNode;
}

export interface IInputIconProps {
  children: ReactNode;
}

export type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputRoot = (props: IInputRootProps) => {
  return (
    <div className="flex items-center px-4 py-3 rounded-lg border gap-3 focus-within:ring-2 ring-primary">
      {props.children}
    </div>
  );
};

export const InputIcon = (props: IInputIconProps) => {
  return <i className="text-light-gray w-5">{props.children}</i>;
};

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    return <input ref={ref} className="outline-none w-full" {...props} />;
  }
);

export const InputGroup = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
};
