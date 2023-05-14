"use client";
import { FC } from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import { cn } from "@/lib/utils";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  errors,
  label,
  register,
  disabled,
  required,
  type,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type ?? "text"}
          autoComplete={id}
          placeholder={id}
          disabled={disabled}
          className={cn(
            styles.input,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};

export default Input;
