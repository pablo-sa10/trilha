import { User } from "@/types";
import { createContext, useContext } from "react";

export interface LearningPathsType {
    trilhas: Props[]
}

interface Props {
    init: string;
    id_route: number;
    user: number;
    name: string;
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
