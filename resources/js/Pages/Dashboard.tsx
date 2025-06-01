import { Head, Link, usePage } from "@inertiajs/react";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { MainMenu } from "@/Layouts/MainMenuLayout";
import { Toaster } from "@/components/ui/sonner";
import {
    CheckCircle,
    Layers,
    LucideIcon,
    Plus,
    Route,
} from "lucide-react";

import { LearningPathsProvider } from "@/context/LearningPathsContext";
import { useEffect, useState } from "react";
import { ModalInfo } from "@/components/modal/ModalInfo";
import { DashboardLayout } from "@/Layouts/DashboardLayout";


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
    nome_materia: string;
}

export default function Dashboard({ auth, trilhas, progress }: DashboardProps) {

    /**Modal de erro */
    const { errors } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (errors.erro) {
            setShowModal(true);
        }
    }, [errors]);

    // console.log(progress)

    const { emAndamento, concluida } = (progress ?? []).reduce(
        (acc, pro) => {
            
            if (pro.finished_questions > 0 && pro.finished_questions === pro.total_questions) {
                acc.concluida++;
            } else {
                acc.emAndamento++;
            }
            return acc;
        },
        { emAndamento: 0, concluida: 0 }
    );

    /**Resumo geral */
    const summarys: SummaryProps[] = [
        {
            title: "Trilhas em Andamento",
            quantity: emAndamento,
            icon: Route,
        },
        {
            title: "Trilhas Concluídas",
            quantity: concluida,
            icon: CheckCircle,
        },
        {
            title: "Trilhas Disponíveis",
            quantity: trilhas?.length || 0,
            icon: Layers,
        },
    ];

    return (
        <AuthProvider value={{ user: auth.user }}>
            <LearningPathsProvider value={{ trilhas }}>
                <Head title="Home" />
                <MainMenu>
                    <DashboardLayout summary={summarys} progress={progress} />
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
