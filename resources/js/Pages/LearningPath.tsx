import { BackButton } from "@/components/BackButton";
import { ButtonUpDown } from "@/components/LearningPathPage/ButtonUpDown";
import { WelcomeQuestions } from "@/components/LearningPathPage/WelcomeQuestions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AuthProvider } from "@/context/AuthUserContext";
import { User } from "@/types";
import { Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

    const variantMap: Record<string, "info" | "success" | "warning" | "destructive" | "extreme"> = {
        "Muito Fácil\n": "info",
        "Fácil": "success",
        "Médio": "warning",
        "Difícil": "destructive",
        "Muito Difícil": "extreme"
    }

    const feedbackRef = useRef<HTMLDivElement>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(true);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
        return progress.finished_questions === 0
            ? -1 // Welcome
            : progress.finished_questions - 1; // Última respondida
    });

    console.log(progress.finished_questions);
    console.log(currentQuestionIndex)

    useEffect(() => { // rolar scrool ao feedback quando ele se tornar visivel
        if (hasAnswered && feedbackRef.current) {
            feedbackRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [hasAnswered]);

    // avançar questao
    const goToNext = () => {
        if (currentQuestionIndex < trilha.questoes.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setHasAnswered(false);
            setIsCorrect(null);
        }
        if(currentQuestionIndex == progress.finished_questions){
            setIsAllowed(false)
        }
    };

    // voltar questao
    const goToPrev = () => {
        if (currentQuestionIndex > -1) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setSelectedOption(null);
            setHasAnswered(false);
            setIsCorrect(null);
        }
    };

    return (
        <AuthProvider value={{ user: auth.user }}>
            <Head title={trilha.NomeTrilha} />

            <div className="pl-5 pt-10 md:p-0 md:fixed md:left-10 md:top-10 md:z-50">
                <BackButton page={"dashboard"} />
            </div>

            <section className="flex flex-col gap-4 py-14 items-center min-h-screen justify-center container mx-auto">
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

                            <RadioGroup
                                value={selectedOption}
                                onValueChange={(value) => setSelectedOption(value)}
                            >
                                <div className="space-y-3">
                                    {trilha.questoes[currentQuestionIndex].Alternativas.map((alt) => (
                                        <div key={alt.Alternativa} className="flex items-center space-x-2">
                                            <RadioGroupItem disabled={hasAnswered} value={alt.Alternativa} />
                                            <Label className="text-base" htmlFor="alt">
                                                {alt.DescricaoAlternativa}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </RadioGroup>

                            <div className="pt-4">
                                <Button
                                    onClick={() => {
                                        const correct =
                                            selectedOption === trilha.questoes[currentQuestionIndex].RespostaCorreta;
                                        setIsCorrect(correct);
                                        setHasAnswered(true);
                                    }}
                                    disabled={!selectedOption}
                                >
                                    Responder
                                </Button>
                            </div>
                            {hasAnswered && (
                                <motion.div
                                    ref={feedbackRef}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <Alert
                                        className={`space-y-4 p-6 border-l-4 ${isCorrect
                                            ? "border-green-500 bg-green-50 text-green-800"
                                            : "border-red-500 bg-red-50 text-red-800"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {isCorrect ? (
                                                <CheckCircle className="!h-6 !w-6 text-green-500" />
                                            ) : (
                                                <AlertTriangle className="!h-6 !w-6 text-red-500" />
                                            )}
                                            <AlertTitle className="text-3xl">{isCorrect ? "Resposta Correta!" : "Resposta Incorreta"}</AlertTitle>
                                        </div>
                                        <AlertDescription className="text-lg leading-relaxed">
                                            {isCorrect
                                                ? "Ótimo trabalho! Se quiser aprofundar ainda mais seu entendimento, clique no botão abaixo para ver a explicação detalhada da IA."
                                                : "Não se preocupe! Aprender é um processo. Clique no botão abaixo e deixe a nossa IA te mostrar uma explicação completa dessa questão."}
                                        </AlertDescription>

                                        <div className="text-end pt-2">
                                            <Button className="text-base" variant="outline">
                                                Consultar explicação com IA <BrainCircuit className="ml-2 !h-6 !w-6" />
                                            </Button>
                                        </div>
                                    </Alert>
                                </motion.div>
                            )}

                        </motion.div>
                    )}

                </AnimatePresence>
            </section>

            {/* BOTOES PARA LOCOCOMOVER AS QUESTÕES */}
            <ButtonUpDown
                className=""
                disabledDown={currentQuestionIndex >= trilha.questoes.length - 1 && isAllowed ? true : false}
                disabledUp={currentQuestionIndex === -1}
                upQuestion={goToPrev}
                downQuestion={goToNext}
            />
            <Toaster className="toast" />
        </AuthProvider>
    );
}
