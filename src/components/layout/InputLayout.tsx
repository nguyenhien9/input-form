import { InputHTMLAttributes } from "react";
import Typo from "../Typo";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  label: string;
  InputElement: React.ReactNode;
}

export default function InputLayout(props: InputProps) {
  const { label, name, InputElement } = props;

  const LeftSideRender = () => {
    return (
      <label htmlFor={name} className="w-1/3">
        <Typo>{label}</Typo>
      </label>
    );
  };
  const RightSideRender = () => {
    return InputElement;
  };

  const defaultClassName =
    "h-10 w-full outline-0 border rounded-lg p-3 text-sm transition-all ease-linear duration-300 focus:shadow-lg focus:border-sky-400";
  return (
    <div className="flex items-center py-4 ">
      {LeftSideRender()}
      {RightSideRender()}
    </div>
  );
}
