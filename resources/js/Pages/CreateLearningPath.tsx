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
};

interface LearningPath {
    init: string;
    id_route: number;
    user: number;
    name: string;
}

export default function CreateLearningPath({ auth, trilhas }: LearningPathsProps) {
    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Nova Trilha" />
                <MainMenu>
                    <FormCreateLearningPath />
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
