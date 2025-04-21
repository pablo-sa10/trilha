import { Head, Link } from "@inertiajs/react";
import { NavBar } from "@/Components/Guest/NavBar";
import Guest from "@/Layouts/GuestLayout";
import { AuthContextType, AuthProvider } from "@/context/AuthUserContext";

export default function Welcome({ auth }: { auth: AuthContextType }) {
    return (
        <AuthProvider value={auth}>
            <Head title="Bem Vindo!" />
            <NavBar />
            <Guest />
        </AuthProvider>
    );
}
