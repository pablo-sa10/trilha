import { AuthProvider } from "@/context/AuthUserContext";
import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

type LearningPathType = {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
};

interface LearningPath {
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
}

export default function LearningPath({ auth, trilhas }: LearningPathType) {

    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                {/* <Head title={trilhas[0].nome_trilha} /> */}
                <></>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
