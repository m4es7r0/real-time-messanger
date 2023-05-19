"use client";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface AuthContextProps {}

const AuthContext: FC<PropsWithChildren<AuthContextProps>> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
