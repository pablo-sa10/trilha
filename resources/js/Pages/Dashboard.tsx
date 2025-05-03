import { Head, Link } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { Toaster } from "@/Components/ui/sonner";
import { buttonVariants } from "@/Components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type DashboardProps = {
    auth: {
        user: User | null;
    };
    awsOk: boolean;
    awsError: string | null;
};

export default function Dashboard({ auth, awsOk, awsError }: DashboardProps) {

    /**
     * Para dar continuidade no projeto sem conectar a API
     * foi colocado dados estaticas, para popular a tela
     */
    const createTrilhas = ["trilha 1", "trilha 2", "trilha 3"];
    const learningPath = null;

    console.log(auth);

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title="Home" />
            <MainMenu>
                {!learningPath && (
                    <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
                        <div className="mb-6 max-w-md">
                            <h1 className="text-3xl font-bold mb-2">
                                Bem-vindo ao seu Dashboard!
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Comece sua jornada criando sua primeira{" "}
                                <strong>Trilha de Estudos</strong>. Clique no
                                botão abaixo para iniciar.
                            </p>
                        </div>

                        <Link
                            className={cn(
                                buttonVariants({ size: "xl" }),
                                "flex gap-2 items-center"
                            )}
                            href={route("dashboard")}
                        >
                            <span className="text-lg md:text-xl">
                                Criar nova Trilha de Estudos
                            </span>
                            <Plus className="!w-6 !h-6" />
                        </Link>
                    </section>
                )}
            </MainMenu>
            <Toaster className="toast" />
        </AuthProvider>
    );
}
