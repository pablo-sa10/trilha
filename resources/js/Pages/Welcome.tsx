import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { NavBar } from '@/Components/Guest/NavBar'
import Guest from '@/Layouts/GuestLayout';



export default function Welcome({
    auth
}: PageProps) {

    return (
        <>
            <Head title="Bem Vindo!" />
            <NavBar auth={auth} />
            <Guest />
        </>
    );
}
