import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";

type DashboardProps = {
    auth: User | null;
    userRole: string;
};

export default function Dashboard({ auth, userRole }: DashboardProps) {

    return (
        <AuthProvider value={{user: auth, userRole}}>
            <Head title="Home" />
            <MainMenu>
                ola
            </MainMenu>
        </AuthProvider>
    );
}
