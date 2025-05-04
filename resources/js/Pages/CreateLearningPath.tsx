import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthUserContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { FormCreateLearningPath } from "@/components/FormCreateLearningPath";

type LearningPathsProps = {
    auth: {
        user: User | null;
    };
};

export default function CreateLearningPath({auth}: LearningPathsProps){

    return (

        <AuthProvider value={{user: auth.user}}>
            <Head title="Nova Trilha" />
            <MainMenu>
                <FormCreateLearningPath/>
            </MainMenu>
            <Toaster className="toast" />
        </AuthProvider>
    )
}