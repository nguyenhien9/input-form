import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Typo from "../Typo";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  register: object;
}

const CustomInput = (props: InputProps) => {
  const { label, className, register } = props;
  const defaultClassName =
    "h-10 w-full outline-0 border rounded-lg p-3 text-sm transition-all ease-linear duration-300 focus:shadow-lg focus:border-sky-400";
  const id = name + crypto.randomUUID();
  return (
    <div className="flex items-center py-4 ">
      <label htmlFor={id} className="w-1/3">
        <Typo>{label}</Typo>
      </label>
      <input
        id={id}
        {...props}
        {...register}
        className={twMerge(defaultClassName, className)}
      />
    </div>
  );
};

export default CustomInput;
