import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
}

const Input = (props: InputProps) => {
  const { className, name } = props;
  const defaultClassName =
    "h-10 w-full outline-0 border rounded-lg p-3 text-sm transition-all ease-linear duration-300 focus:shadow-lg focus:border-sky-400";

  return (
    <input
      id={name}
      {...props}
      className={twMerge(defaultClassName, className)}
    />
  );
};

export default Input;
