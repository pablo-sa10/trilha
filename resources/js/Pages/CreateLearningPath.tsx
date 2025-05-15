import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthUserContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { FormCreateLearningPath } from "@/components/FormCreateLearningPath";
import { LearningPathsProvider } from "@/context/LearningPathsContext";

type LearningPathsProps = {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
    materias: Subject[];
};

interface LearningPath {
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
}

interface Subject {
    id_materia: number;
    nome: string;
}

export default function CreateLearningPath({ auth, trilhas, materias }: LearningPathsProps) {

    // console.log(auth)
    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Nova Trilha" />
                <MainMenu>
                    <FormCreateLearningPath subjects={materias} />
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
