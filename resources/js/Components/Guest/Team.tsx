import { buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Instagram, Linkedin } from "lucide-react";

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    socialNetworks: SocialNetworkslProps[];
    // socialNetworks: {name: string, url: string}[]; // mesma coisa q o exemplo de cima
}

interface SocialNetworkslProps {
    name: string;
    url: string;
}

const teamList: TeamProps[] = [
    {
        imageUrl: "https://github.com/pablo-sa10.png",
        name: "Pablo Moura",
        position: "Desenvolver Full Stack",
        socialNetworks: [
            {
                name: "Linkedin",
                url: "www.google.com",
            },
            {
                name: "Instagram",
                url: "www.google.com",
            },
        ],
    },
    {
        imageUrl: "https://github.com/pablo-sa10.png",
        name: "Diego Rodrigues",
        position: "Analista de Dados & Desen. Back End",
        socialNetworks: [
            {
                name: "Linkedin",
                url: "www.google.com",
            },
            {
                name: "Instagram",
                url: "www.google.com",
            },
        ],
    },
];

export const Team = () => {
    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Linkedin size="20" />;

            case "Instagram":
                return <Instagram size="20" />;
        }
    };

    return (
        <section
            id="team"
            className="container mx-auto px-5 md:px-24 py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Our Dedicated{" "}
                </span>
                Crew
            </h2>

            <p className="mt-4 mb-10 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis dolor pariatur sit!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
                {teamList.map(
                    (
                        { imageUrl, name, position, socialNetworks }: TeamProps,
                        index
                    ) => (
                        <Card
                            className={`lg:col-start-${
                                index == 0 ? 2 : 3
                            } bg-muted/50 relative mt-8 flex flex-col justify-center items-center`}
                            key={name}
                        >
                            <CardHeader className="mt-8 flex justify-center items-center pb-2">
                                <img
                                    src={imageUrl}
                                    alt="foto de perfil"
                                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                />
                                <CardTitle className="text-center">
                                    {name}
                                </CardTitle>
                                <CardDescription className="text-primary text-center">
                                    {position}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="text-center py-2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </CardContent>

                            <CardFooter className="place-items-center">
                                {socialNetworks.map(
                                    ({ name, url }: SocialNetworkslProps) => (
                                        <div key={name}>
                                            <a
                                                href={url}
                                                rel="noreferrer"
                                                target="_blank"
                                                className={buttonVariants({
                                                    variant: "ghost",
                                                    size: "icon",
                                                })}
                                            >
                                                <span className="sr-only">
                                                    {name} icon
                                                </span>
                                                {socialIcon(name)}
                                            </a>
                                        </div>
                                    )
                                )}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
