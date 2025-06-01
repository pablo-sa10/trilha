import { User } from "@/types";
import { createContext, useContext } from "react";

export interface LearningPathsType {
    trilhas: Props[]
}

interface Props {
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
    nome_materia: string;
}

const LearningPathsContext = createContext<LearningPathsType | undefined>(undefined);

export const useLearningPathContext = () => {
    const context = useContext(LearningPathsContext);

    if(!context){
        throw new Error("useLearningPathContext deve ser usado dentro de LearningPathsProvider");
    }
    return context
}

export const LearningPathsProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: LearningPathsType;
}) => (
    <LearningPathsContext.Provider value={value} >
        {children}
    </LearningPathsContext.Provider>
);
