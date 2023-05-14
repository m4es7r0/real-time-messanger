"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from "react";

import { cn } from "@/lib/utils";
import styles from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  fullWidth,
  secondary,
  danger,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={cn(
        styles.button,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-black" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? "Button"}
    </button>
  );
};

export default Button;
