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
import { motion, AnimatePresence } from "framer-motion";
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

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
        return progress.finished_questions === 0
            ? -1 // Welcome
            : progress.finished_questions - 1; // Última respondida
    });

    // avançar questao
    const goToNext = () => {
        if (currentQuestionIndex < trilha.questoes.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    // voltar questao
    const goToPrev = () => {
        if (currentQuestionIndex > -1) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    // console.log(finished_questions, total_questions)
    console.log(trilha);
    console.log(progress);

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title={trilha.NomeTrilha} />

            <div className="pl-5 pt-10 md:p-0 md:fixed md:left-10 md:top-10 md:z-50">
                <BackButton page={"dashboard"} />
            </div>

            <section className="flex flex-col gap-4 items-center py-8 min-h-screen justify-center container mx-auto">
                <AnimatePresence mode="wait">
                    {/* BOAS VINDAS ÀS QUESTÕES */}
                    {currentQuestionIndex === -1 && (
                        <motion.div
                            key="Welcome"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex justify-center"
                        >
                            <WelcomeQuestions nome={trilha.NomeTrilha} materia={trilha.questoes[0].Materia} />
                        </motion.div>
                    )}
                    {/* QUESTAO ATUAL */}

                    {currentQuestionIndex >= 0 && (
                        <motion.div
                            key={trilha.questoes[currentQuestionIndex].Questao}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.4 }}
                            className="w-10/12 md:w-8/12 space-y-6"
                        >
                            <div className="flex flex-col md:flex-row justify-between">
                                <h1 className="text-2xl md:text-3xl font-bold text-primary">
                                    Questão {currentQuestionIndex + 1}
                                </h1>
                                <Badge
                                    className="text-[12px] w-5/12 md:w-auto mt-2 md:mt-0 md:text-sm"
                                    variant={
                                        variantMap[trilha.questoes[currentQuestionIndex].Dificuldade]
                                    }
                                >
                                    {trilha.questoes[currentQuestionIndex].TipoQuestao} -{" "}
                                    {trilha.questoes[currentQuestionIndex].Dificuldade}
                                </Badge>
                            </div>

                            <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
                                {trilha.questoes[currentQuestionIndex].Enunciado}
                            </p>

                            <RadioGroup defaultValue="">
                                <div className="space-y-3">
                                    {trilha.questoes[currentQuestionIndex].Alternativas.map((alt) => (
                                        <div key={alt.Alternativa} className="flex items-center space-x-2">
                                            <RadioGroupItem value={alt.Alternativa} />
                                            <Label className="text-base" htmlFor="alt">
                                                {alt.DescricaoAlternativa}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </RadioGroup>

                            <div className="pt-4">
                                <Button>Responder</Button>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </section>

            {/* BOTOES PARA LOCOCOMOVER AS QUESTÕES */}
            <ButtonUpDown
                className=""
                disabledDown={currentQuestionIndex >= trilha.questoes.length - 1}
                disabledUp={currentQuestionIndex === -1}
                upQuestion={goToPrev}
                downQuestion={goToNext}
            />
            <Toaster className="toast" />
        </AuthProvider>
    );
}
