import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AuthContextType, AuthProvider } from "@/context/AuthUserContext";

type DashboardProps = {
    auth: AuthContextType;
    userRole: string;
};

export default function Dashboard({ auth, userRole }: DashboardProps) {

    return (
        <AuthProvider value={auth}>
            <Head title="Home" />
        </AuthProvider>
    );
}
