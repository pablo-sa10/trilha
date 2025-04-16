import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/Components/login-form";
import student from "@images/student.png";
import { Head } from "@inertiajs/react";
import { Toaster } from "@/Components/ui/sonner"

interface LoginProps {
    status?: string,
    canResetPassword: boolean
}

export default function LoginPage({
    status,
    canResetPassword
}: LoginProps) {

    console.log(status, canResetPassword)

    return (
        <>
            <Head title="Login" />
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <img
                        src={student}
                        alt="imagem ilustrativa de um estudante"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
            <Toaster className="toast"/>
        </>
    );
}
