import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { Toaster } from "@/Components/ui/sonner";

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
                <h1>OLA MUNDO</h1>
            </MainMenu>
            <Toaster className="toast" />
        </AuthProvider>
    );
}
