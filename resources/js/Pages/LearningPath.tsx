import { BackButton } from "@/components/BackButton";
import { ButtonUpDown } from "@/components/LearningPathPage/ButtonUpDown";
import { WelcomeQuestions } from "@/components/LearningPathPage/WelcomeQuestions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

    const variantMap: Record<string, "success" | "warning" | "destructive"> = {
        "Fácil": "success",
        "Médio": "warning",
        "Difícil": "destructive"
    }

    const {finished_questions, total_questions} = progress
    const [finalizadas, setFinalizadas] = useState(finished_questions)

    console.log(finished_questions, total_questions)

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title={trilha.NomeTrilha} />

            <div className="fixed left-10 top-10">
                <BackButton page={"dashboard"} />
            </div>

            <section className="flex flex-col gap-4 items-center py-8 min-h-screen justify-center container mx-auto">
                {/* BOAS VINDAS ÀS QUESTÕES */}
                <WelcomeQuestions className={finalizadas === 0 ? "" : "hidden"} nome={trilha.NomeTrilha} />

                {/* PERGUNTAS DA TRILHA */}
                {trilha.questoes.map((value: Questoes, index) => (
                    <div key={value.Questao} className={`w-10/12 md:w-8/12 space-y-6 ${finalizadas >= 1 && finished_questions - 1 == index ? "":"hidden" }`}>
                        <div className="flex flex-col md:flex-row justify-between">
                            <h1 className="text-2xl md:text-3xl font-bold text-primary">Questão {index + 1}</h1>
                            <Badge className="text-[12px] w-5/12 md:w-auto mt-2 md:mt-0 md:text-sm" variant={variantMap[value.Dificuldade]}>{value.TipoQuestao} - {value.Dificuldade} </Badge>
                        </div>
                        {/* Enunciado da pergunta */}
                        <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
                            {value.Enunciado}
                        </p>

                        {/* Alternativas */}
                        <RadioGroup defaultValue="">
                            <div className="space-y-3">
                                {value.Alternativas.map((alt: Alternativas) => (
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={alt.Alternativa} />
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
                disabledDown={finished_questions === total_questions}
                disabledUp={finished_questions === 0}
            />
            <Toaster className="toast" />
        </AuthProvider>
    );
}
