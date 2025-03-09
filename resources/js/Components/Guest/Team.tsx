import { buttonVariants } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { iconNames } from "lucide-react/dynamic";

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
        position: "Analista de Dados & Desenvolver Back End",
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

    return <></>;
};
