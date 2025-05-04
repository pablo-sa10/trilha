import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroCards } from "@/components/Guest/HeroCards";
import { LogoIcon } from "../Icons";

export default function WelcomeGuest() {
    return (
        <section className="container mx-auto px-12 grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        Sua{" "}
                        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                            Jornada
                        </span>{" "}
                        de Estudos
                    </h1>{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                            Começa
                        </span>{" "}
                        Aqui!
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Crie um plano de estudos personalizado para o vestibular com IA.
                    Estude de forma eficiente e focada no que realmente importa!
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Link 
                        href={route("register")}
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "default"
                        })}`}
                    >
                        Comece Agora
                    </Link>
                    {/* <Button className="">Comece</Button> */}

                    <Link
                        rel=""
                        href=""
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Já tem conta?
                        <LogoIcon className="w-6 h-6 ml-2" />
                    </Link>
                </div>
            </div>

            {/* HERO CARDS SECTION */}
            <div className="z-5">
                <HeroCards />
            </div>

            {/* Shadow effect */}
            <div className="shadow-move"></div>
        </section>
    );
}
