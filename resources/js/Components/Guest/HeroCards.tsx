import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Check, ChartLine, User, BrainCircuit } from "lucide-react";
import { LogoIcon } from "../Icons";

const benefits = ["Acesso ao plano de estudos", "Sugestões personalizadas de matérias", "Acesso à trilha de estudos"];

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* TESTIMONIAL */}
            <Card className="absolute w-[340px] -top-[25px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt=""
                            src=""
                        />
                        <AvatarFallback className="">
                            <LogoIcon className="w-7 h-7 text-primary"/>
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">
                            Trilha de Estudos Inteligente
                        </CardTitle>
                        <CardDescription>
                            suporte@trilhaestudos.com
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>Organize seus estudos de forma eficiente!</CardContent>
            </Card>

            {/* TEAM */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        alt="foto do usuário"
                        src="https://github.com/shadcn.png"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Seu Usuário</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Estudante
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        Você está no nível <strong>Intermediário</strong>
                        <br />
                        Próximo objetivo: <strong>Aprimorar Matemática</strong>
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer"
                            href="#"
                            // target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">User Icon</span>
                            <User className="w-5 h-5" />
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            // target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Progress icon</span>
                            <ChartLine className="w-5 h-5" />
                        </a>

                    </div>
                </CardFooter>
            </Card>

            {/* PRICING */}
            <Card className="absolute top-[150px] left-[10px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        Gratuito
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            Mais Popular
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">R$0</span>
                        <span className="text-muted-foreground"> /mês</span>
                    </div>

                    <CardDescription>
                        Comece a organizar seus estudos de forma eficiente e gratuita.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">Comece Agora Grátis</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {benefits.map((benefit: string) => (
                            <li key={benefit} className="flex">
                                <Check className="text-green-500" />
                                {""}
                                <h3 className="ml-2">{benefit}</h3>
                            </li>
                        ))}
                    </div>
                </CardFooter>
            </Card>

            {/* SERVICE */}
            <Card className="absolute w-[350px] right-[10px] -bottom-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <BrainCircuit />
                    </div>
                    <div>
                        <CardTitle>Estudo Personalizado com IA</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Nossa inteligência artificial cria um plano de estudos feito sob medida para você,
                            considerando suas dificuldades e necessidades.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
