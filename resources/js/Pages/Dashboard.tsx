import { Head, Link, usePage } from "@inertiajs/react";
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
import { useEffect, useState } from "react";
import { ModalInfo } from "@/components/modal/ModalInfo";

type DashboardProps = {
    auth: {
        user: User | null;
    };
    trilhas: LearningPath[];
    progress: {
        id_trilha: number;
        finished_questions: number;
        total_questions: number;
    }[];
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

export default function Dashboard({ auth, trilhas, progress }: DashboardProps) {
    
    const  { errors } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    console.log(trilhas);
    console.log(progress);
    
    useEffect(() => {
        if (errors.erro) {
            setShowModal(true);
        }
    }, [errors]);

    /**Resumo geral */
    const summary: SummaryProps[] = [
        {
            title: "Trilhas em Andamento",
            quantity: 0,
            icon: Route,
        },
        {
            title: "Trilhas Concluídas",
            quantity: 0,
            icon: CheckCircle,
        },
        {
            title: "Trilhas Disponíveis",
            quantity: trilhas.length ||  0,
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
                                <p className="text-sm text-gray-400 font-semibold">Suas trilhas de estudos já estão disponíveis abaixo</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                                            className="bg-card transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10"
                                            >
                                                <CardHeader>
                                                    <CardTitle>{nome_trilha}</CardTitle>
                                                    <CardDescription>Materia na qual é ligada a trilhas</CardDescription>
                                                    <div>
                                                        <p className="text-sm text-gray-400 font-semibold">
                                                            Criada em: {new Date(data_criacao).toLocaleDateString("pt-BR", {
                                                                year: "numeric",
                                                                month: "2-digit",
                                                                day: "2-digit",
                                                            })}
                                                        </p>
                                                    </div>
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
                {showModal && (
                    <ModalInfo 
                        open={showModal}
                        onClose={() => setShowModal(false)}
                        title="Erro!"
                        description={errors.erro}
                    />
                )}
            </LearningPathsProvider>
        </AuthProvider>
    );
}
