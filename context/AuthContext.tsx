import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router, { useRouter } from "next/router";

import { AxiosResponse } from "axios";
import { api } from "../services/apiClient";
import { useToast } from "@chakra-ui/react";

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextType = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  isAuthenticated: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type ResponseData = {
  access_token: string;
};

export const signOut = async () => {
  destroyCookie(undefined, "edu.token", {
    path: "/",
    sameSite: "strict",
  });

  Router.push(`/`);
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const { route } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const { "edu.token": token } = parseCookies();

    if (token) {
    } else {
      signOut();
    }
  }, []); //eslint-disable-line

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      email = email.toLowerCase();

      const response: AxiosResponse<ResponseData> = await api.post(`login`, {
        email,
        password,
      });

      const { access_token } = response.data;

      setCookie(undefined, "edu.token", access_token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
        sameSite: "strict",
      });

      setIsAuthenticated(true);
      Router.push("aluno/aula");
    } catch (error: any) {
      toast({
        title: "Erro ao Logar",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
