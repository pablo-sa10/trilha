import { Statistics } from "./Statistics";

// import { Stat }
import pilot from "@images/pilot.png";

export const About = () => {
    return (
        <section
            id="about"
            className="container mx-auto px-5 md:px-24 py-24 sm:py-32"
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={pilot}
                        alt="Pilot"
                        className="w-[250px] object-contain rounded-lg"
                    />

                    <div className="bg-blue-0 flex flex-col justify-center">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    Sobre a{" "}
                                </span>
                                Plataforma
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                A nossa plataforma de estudos foi criada para ajudar alunos a se prepararem de maneira
                                eficiente para vestibulares e exames. Utilizando inteligência artificial,
                                ela cria trilhas de estudo personalizadas, adaptadas às necessidades de cada aluno.
                                Com planos de estudos focados nas suas dificuldades, você consegue otimizar o tempo
                                e melhorar seu desempenho. Estamos aqui para transformar a forma como você estuda!
                            </p>
                        </div>
                        {/* <Statistics /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
