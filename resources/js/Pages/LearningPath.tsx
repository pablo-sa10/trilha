import { Button } from "@/components/ui/button";
import { AuthProvider } from "@/context/AuthUserContext";
import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { Toaster } from "sonner";

type LearningPathType = {
    auth: {
        user: User | null;
    };
    trilha: LearningPath;
};

interface LearningPath {
    id_usuario: number;
    id_trilha: number;
    NomeTrilha: string;
    questoes: Questoes[];
}

interface Questoes {
    Questao: string;
    Enunciado: string;
    Dificuldade: string;
    Materia: string;
    TipoQuestao: string;
    Alternativas: Alternativas[];
    RespostaCorreta: string;
}

interface Alternativas {
    Alternativa: string;
    DescricaoAlternativa: string;
}

export default function LearningPath({ auth, trilha }: LearningPathType) {

    console.log(trilha);

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title={trilha.NomeTrilha} />
            <div className="flex gap-2 fixed bottom-4 right-4 z-50">
                <Button size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
            <Toaster className="toast" />
        </AuthProvider>
    );
}
