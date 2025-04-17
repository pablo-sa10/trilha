import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { NavBar } from '@/Components/Guest/NavBar'
import Guest from '@/Layouts/GuestLayout';
import { AuthProvider } from '@/context/AuthUserContext';

export default function Welcome({
    auth
}: PageProps) {

    console.log(auth)

    return (
        <AuthProvider value={auth}>
            <Head title="Bem Vindo!" />
            <NavBar />
            <Guest />
        </AuthProvider>
    );
}
