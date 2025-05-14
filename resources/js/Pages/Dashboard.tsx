import { Head, Link } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { Toaster } from "@/components/ui/sonner";
import { buttonVariants } from "@/components/ui/button";
import {
    CheckCircle,
    Layers,
    LucideIcon,
    Plus,
    Route,
    Section,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SummaryCards } from "@/components/SummaryCards";
import { LearningPathsProvider } from "@/context/LearningPathsContext";

type DashboardProps = {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
};

interface SummaryProps {
    title: string;
    quantity: number;
    icon: LucideIcon;
}

interface LearningPath {
    init: string;
    id_route: number;
    user: number;
    name: string;
}

export default function Dashboard({ auth, trilhas }: DashboardProps) {
    // console.log(trilhas);
    // console.log(auth);

    /**Resumo geral */
    const summary: SummaryProps[] = [
        {
            title: "Trilhas em Andamento",
            quantity: 1,
            icon: Route,
        },
        {
            title: "Trilhas Concluídas",
            quantity: 0,
            icon: CheckCircle,
        },
        {
            title: "Trilhas Disponíveis",
            quantity: 1,
            icon: Layers,
        },
    ];

    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{trilhas}}>
                <Head title="Home" />
                <MainMenu>
                    {trilhas.length < 1 ? (
                        <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
                            <div className="mb-6 max-w-md">
                                <h1 className="text-3xl font-bold mb-2">
                                    Bem-vindo ao seu Dashboard!
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    Comece sua jornada criando sua primeira{" "}
                                    <strong>Trilha de Estudos</strong>. Clique
                                    no botão abaixo para iniciar.
                                </p>
                            </div>

                            <Link
                                className={cn(
                                    buttonVariants({ size: "xl" }),
                                    "flex gap-2 items-center"
                                )}
                                href={route("new-learning-path.create")}
                            >
                                <span className="text-lg md:text-xl">
                                    Criar nova Trilha de Estudos
                                </span>
                                <Plus className="!w-6 !h-6" />
                            </Link>
                        </section>
                    ) : (
                        <section>
                            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                                {summary.map(
                                    ({
                                        title,
                                        icon,
                                        quantity,
                                    }: {
                                        title: string;
                                        icon: LucideIcon;
                                        quantity: number;
                                    }) => (
                                        <SummaryCards
                                            key={title}
                                            title={title}
                                            icon={icon}
                                            quantity={quantity}
                                        />
                                    )
                                )}
                            </div>
                            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <p>card</p>
                                <p>card</p>
                                <p>card</p>
                                <p>card</p>
                            </div>
                        </section>
                    )}
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
