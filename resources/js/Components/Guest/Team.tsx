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

]

export const Team = () => {
    return (
        <></>
    )
}