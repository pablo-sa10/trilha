import { createContext, useContext } from "react";
import { User } from '@/types';

export interface AuthContextType {
    user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext deve ser usado dentro de AuthProvider");
    }
    return context;
}

export const AuthProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: AuthContextType
}) => (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)