import { ButtonUpDown } from "@/components/LearningPathPage/ButtonUpDown";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Toaster } from "sonner";

type LearningPathType = {
    auth: {
        user: User | null;
    };
    trilha: LearningPath;
    progress: {
        id_trilha: number;
        finished_questions: number;
        total_questions: number;
    }
};

interface LearningPath {
    id_usuario: number;
    id_trilha: number;
    NomeTrilha: string;
    questoes: Questoes[];
}

interface Questoes {
    Questao: string;
    Enunciado: string;
    Dificuldade: string;
    Materia: string;
    TipoQuestao: string;
    Alternativas: Alternativas[];
    RespostaCorreta: string;
}

interface Alternativas {
    Alternativa: string;
    DescricaoAlternativa: string;
}

export default function LearningPath({ auth, trilha, progress }: LearningPathType) {

    console.log(trilha);
    console.log(progress);

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title={trilha.NomeTrilha} />

            <section className="flex flex-col gap-4 items-center justify-center h-[100vh] container mx-auto">
                <div>

                </div>
                <div className="w-10/12 md:w-8/12 hidden">
                    <h1>pergunta 1</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ad unde perferendis, est maxime accusantium ipsum minus quo et delectus? Aspernatur
                        facere harum deserunt illum. Amet explicabo placeat cupiditate dolorum.
                    </p>
                </div>
                <div className="w-10/12 md:w-8/12 hidden">
                    <h1>pergunta 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ad unde perferendis, est maxime accusantium ipsum minus quo et delectus? Aspernatur
                        facere harum deserunt illum. Amet explicabo placeat cupiditate dolorum.
                    </p>
                </div>
                <div className="w-10/12 md:w-8/12">
                    <h1>pergunta 3</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ad unde perferendis, est maxime accusantium ipsum minus quo et delectus? Aspernatur
                        facere harum deserunt illum. Amet explicabo placeat cupiditate dolorum.
                    </p>
                </div>
            </section>

            {/* BOTOES PARA LOCOCOMOVER AS QUESTÕES */}
            <ButtonUpDown

            />
            <Toaster className="toast" />
        </AuthProvider>
    );
}
