import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";

type DashboardProps = {
    auth: {
        user: User | null;
    }
};

export default function Dashboard({ auth }: DashboardProps) {

    return (
        <AuthProvider value={{user: auth.user}}>
            <Head title="Home" />
            <MainMenu>
                ola
            </MainMenu>
        </AuthProvider>
    );
}
