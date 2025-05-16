import { BackButton } from "@/components/BackButton";
import { ButtonUpDown } from "@/components/LearningPathPage/ButtonUpDown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
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

            <div className="fixed left-10 top-10">
                <BackButton page={"dashboard"} />
            </div>

            <section className="flex flex-col gap-4 items-center justify-center h-[100vh] container mx-auto">
                {/* BOAS VINDAS ÀS QUESTÕES */}
                <div className="px-1 md:px-0 text-4xl md:text-5xl font-bold text-center hidden">
                    <h1 className="mb-4">
                        É {" "}
                        <span className="inline bg-gradient-to-r from-[#FFB347] to-[#FF7E5F] text-transparent bg-clip-text">
                            Hora
                        </span>{" "}
                        de praticar!
                    </h1>
                    <h2 className="inline">
                        Responda às{" "}
                        <span className="inline bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] text-transparent bg-clip-text">
                            Perguntas
                        </span>{" "}
                    </h2>
                    <h2 className="inline">
                        e acompanhe seu{" "}
                        <span className="inline bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-transparent bg-clip-text">
                            Progresso.
                        </span>{" "}
                    </h2>

                    <div className="flex justify-center">
                        <p className="w-10/12 md:w-5/12 text-sm md:text-base mt-6 px-4 py-1 rounded-full bg-muted text-muted-foreground block">
                            {trilha.NomeTrilha} — HTML e CSS
                        </p>
                    </div>

                </div>

                {/* PERGUNTAS DA TRILHA */}
                {trilha.questoes.map((value: Questoes) => (
                    <div key={value.Questao} className="w-10/12 md:w-8/12 space-y-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">Questão {value.Questao}</h1>
                        {/* Enunciado da pergunta */}
                        <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
                            {value.Enunciado}
                        </p>

                        {/* Alternativas */}
                        <RadioGroup defaultValue="">
                            <div className="space-y-3">
                                {value.Alternativas.map((alt: Alternativas) => (
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={alt.Alternativa}/>
                                        <Label className="text-base" htmlFor="alt1">{alt.DescricaoAlternativa}</Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>

                        {/* Botão de envio */}
                        <div className="pt-4">
                            <Button>Responder</Button>
                        </div>
                    </div>
                )
                )}


                <div className="w-10/12 md:w-8/12 hidden">
                    <h1>pergunta 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ad unde perferendis, est maxime accusantium ipsum minus quo et delectus? Aspernatur
                        facere harum deserunt illum. Amet explicabo placeat cupiditate dolorum.
                    </p>
                </div>
                <div className="w-10/12 md:w-8/12 hidden">
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
