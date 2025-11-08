import type { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../../lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive?: boolean;
  variant?: "filled" | "outline";
  color?: "blue" | "gray";
}

export const Button: FC<Props> = (props) => {
  const {
    children,
    className,
    variant = "filled",
    isActive = true,
    color = "blue",
    ...rest
  } = props;

  return (
    <button
      className={cn(
        "px-2 py-1 rounded-md w-28 hover:cursor-pointer transition-colors duration-200",
        variant === "filled" &&
          color === "blue" && ["bg-blue-500 text-white hover:bg-blue-600"],
        variant === "filled" &&
          color === "gray" && [
            "bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-white",
          ],
        variant === "outline" && [
          isActive
            ? "bg-blue-600 text-white border border-blue-600"
            : "border border-blue-400 text-gray-700 hover:bg-blue-200",
        ],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
