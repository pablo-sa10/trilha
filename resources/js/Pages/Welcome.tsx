import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { NavBar } from '@/Components/NavBar'
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
