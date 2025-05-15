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
import { SummaryCards } from "@/components/Dashboard/SummaryCards";
import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    data_criacao: string;
    id_trilha: number;
    id_usuario: number;
    nome_trilha: string;
}

export default function Dashboard({ auth, trilhas }: DashboardProps) {
    // console.log(trilhas);
    // console.log(auth);

    /**Resumo geral */
    const summary: SummaryProps[] = [
        {
            title: "Trilhas em Andamento",
            quantity: trilhas.length || 0,
            icon: Route,
        },
        {
            title: "Trilhas Concluídas",
            quantity: 0,
            icon: CheckCircle,
        },
        {
            title: "Trilhas Disponíveis",
            quantity: 0,
            icon: Layers,
        },
    ];

    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Home" />
                <MainMenu>
                    {trilhas.length < 1 ? (
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
                            <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
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
                            </div>
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
                            <div className="flex flex-col gap-2 my-10">
                                <h1 className="text-2xl font-bold">Estude agora!</h1>
                                <p className="text-sm text-gray-400 font-semibold">Suas trilhas de estudos já estão disponivéis abaixo</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                {trilhas.map(
                                    ({
                                        id_trilha,
                                        nome_trilha,
                                        data_criacao,

                                    }: LearningPath) => (
                                        <Link 
                                            href={route('new-learning-path.show', id_trilha)}
                                            key={id_trilha}
                                        >
                                            <Card
                                            >
                                                <CardHeader>
                                                    <CardTitle>{nome_trilha}</CardTitle>
                                                    <CardDescription>Materia na qual é ligada a trilhas</CardDescription>
                                                </CardHeader>
                                                <CardContent>

                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                )}
                            </div>
                        </section>
                    )}
                </MainMenu>
                <Toaster className="toast" />
            </LearningPathsProvider>
        </AuthProvider>
    );
}
