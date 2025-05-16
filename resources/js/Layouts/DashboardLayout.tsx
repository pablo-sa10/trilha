
import { useState } from 'react';
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SummaryCards } from "@/components/Dashboard/SummaryCards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartProgress } from "@/components/Dashboard/ChartProgress";
import { LucideIcon, Plus } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface DashboardProps {
    trilhas: LearningPath[],
    summary: SummaryProps[],
    progress: {
        id_trilha: number;
        finished_questions: number;
        total_questions: number;
    }[];
}

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

export function DashboardLayout({
    trilhas,
    summary,
    progress,
    ...Props
}: DashboardProps) {

    const { emAndamento, concluida } = progress.reduce(
        (acc, pro) => {
            if (pro.finished_questions === pro.total_questions) {
                acc.concluida++;
            } else {
                acc.emAndamento++;
            }
            return acc;
        },
        { emAndamento: 0, concluida: 0 }
    );

    return (

        trilhas.length < 1 ? (
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
            <section className="mb-10">
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
                    <p className="text-sm text-gray-400 font-semibold">Suas trilhas de estudos já estão disponíveis logo abaixo</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {trilhas.map(
                        ({
                            id_trilha,
                            nome_trilha,
                            data_criacao,

                        }: LearningPath, index) => (

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
                                        <ChartProgress progress={progress[index]} />
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    )}
                </div>
            </section>
        )

    );
}
