import { Head } from "@inertiajs/react";
import { User } from "@/types";
import { AuthProvider } from "@/context/AuthUserContext";
import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { FormEditPRofile } from "@/components/FormEditProfile";
import { Toaster } from "@/components/ui/sonner";

interface EditProfileProps {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
}

interface LearningPath {
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
    nome_materia: string;
}

export default function Edit({ auth, trilhas }: EditProfileProps) {
    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Perfil" />
                <MainMenu>
                    <FormEditPRofile/>
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
