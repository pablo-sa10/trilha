import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthUserContext";
import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { AdmPanelLayout } from "@/Layouts/AdmPanelLayout";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

interface admProps {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
    users: usersProps[];
}

interface usersProps {
    user: {
        id: number;
        name: string;
        email: string;
        email_verified_at?: boolean;
        created_at: string;
        updated_at: string;
    };
    concluidas: number
}

interface LearningPath {
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
    nome_materia: string;
}

export default function AdmPanel({ auth, trilhas, users }: admProps) {

    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Perfil" />
                <MainMenu>
                    <AdmPanelLayout users={users} />
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
