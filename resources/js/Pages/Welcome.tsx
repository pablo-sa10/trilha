import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { NavigationMenuDemo } from '@/Components/NavBar'


export default function Welcome({
    auth
}: PageProps) {

    return (
        <>
            <Head title="Bem Vindo!" />
            <NavigationMenuDemo auth={auth} />
        </>
    );
}
