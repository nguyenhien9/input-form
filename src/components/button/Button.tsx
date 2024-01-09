import { twMerge } from "tailwind-merge";
import Typo from "../Typo";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: ButtonProps) => {
  const { children, className, type } = props;
  const defaultClass =
    "h-[40px] text-white bg-sky-600 rounded-md hover:shadow-xl hover:opacity-90 transition-all ease-linear duration-300";
  return (
    <button
      type={type || "submit"}
      className={twMerge(defaultClass, className)}
    >
      <Typo className="text-md">{children}</Typo>
    </button>
  );
};

export default Button;
