"use client";
import { FC, useCallback, useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { BsGithub, BsGoogle } from "react-icons/bs";

import AuthSocialButton from "../auth-social-button";
import Button from "../button";
import Input from "../input";

import styles from "./AuthForm.module.scss";

interface AuthFormProps {}

type Variant = "LOGIN" | "REGISTER";

const AuthForm: FC<AuthFormProps> = ({}) => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // axios register
      axios
        .post("/api/signup", data)
        .then((res) => {
          if (res.status === 200) {
            reset();
            toast.success("Account created");
          }
        })
        .catch((e) => toast.error(e.response.data || "Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      // nextAuth sign in
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // nextAuth sotial sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-zinc-50 dark:bg-slate-700 px-4 py-8 shadow rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
              required={true}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Button disabled={isLoading} fullWidth type="submit">
            {variant === "LOGIN" ? "Sign in" : "Sign up"}
          </Button>
        </form>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="bg-zinc-50 dark:bg-slate-700 px-2 text-gray-500 dark:text-gray-300">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>

        <div className="flex gap-2 justify-center text-sm text-gray-500 dark:text-gray-300 mt-6 px-2">
          {variant === "LOGIN"
            ? "New to Real-Time Messenger?"
            : "Already have an account?"}
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
