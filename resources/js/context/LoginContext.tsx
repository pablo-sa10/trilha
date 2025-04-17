// src/context/LoginContext.tsx

import { createContext, useContext } from "react";

interface LoginContextProps {
    status?: string;
    canResetPassword: boolean;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext deve ser usado dentro de LoginProvider");
    }
    return context;
};

export const LoginProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: LoginContextProps;
}) => (
    <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
);
