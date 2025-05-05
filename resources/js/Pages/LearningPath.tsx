import { AuthProvider } from "@/context/AuthUserContext";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

type LearningPathType = {
    auth: {
        user: User | null;
    };
};

export default function LearningPath({ auth }: LearningPathType) {
    <AuthProvider value={{ user: auth.user }}>
        <Head title="Nova Trilha" />
        <MainMenu>
            <></>
        </MainMenu>
        <Toaster className="toast" />
    </AuthProvider>;
}
