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
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const benefits = ["4 Team member", "4 GB Storage", "Upto 6 pages"];

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* TESTIMONIAL */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt="minha foto de perfil"
                            src="https://github.com/pablo-sa10.png"
                        />
                        <AvatarFallback>PM</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">
                            Pablo do React
                        </CardTitle>
                        <CardDescription>
                            pablomoura2016@gmail.com
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>This landing page is awesome!</CardContent>
            </Card>

            {/* TEAM */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        alt="fot do git"
                        src="https://github.com/pablo-sa10.png"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">Pablo Roberto</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Front Developer
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam, at animi
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer"
                            href="https://github.com/pablo-sa10"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Github Icon</span>
                            <GitHubLogoIcon className="w-5 h-5" />
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href="https://twitter.com/leo_mirand4"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">X icon</span>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-foreground w-5 h-5"
                            >
                                <title>X</title>
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>

                        <a
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/in/leopoldo-miranda/"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* PRICING */}
            <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        Free
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            Most Popular
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">Start Free Trial</Button>
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
            <Card className="absolute w-[350px] -right-[10px] bottom-[40px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        {/* icone */}
                    </div>
                    <div>
                        <CardTitle>Light & Dark Mode</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Consectetur natusm.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
