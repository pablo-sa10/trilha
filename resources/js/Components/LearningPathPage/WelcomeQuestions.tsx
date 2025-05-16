export function WelcomeQuestions({ className, nome, ...props }: {className?: string, nome: string }) {
    return (
        <div className={`px-1 md:px-0 text-4xl md:text-5xl font-bold text-center ${className}`} {...props}>
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
                    {nome} — HTML e CSS
                </p>
            </div>

        </div>
    )
}