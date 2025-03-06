import { Card, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "@/Components/Icons";
import cubeLeg from "@images/cube-leg.png";

interface ServiceProps{
    title: string;
    description: string;
    icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
    {
        title: "Code Collaboration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <ChartIcon />
    },
    {
        title: "Code Collaboration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <ChartIcon />
    },
    {
        title: "Code Collaboration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <ChartIcon />
    },
]

export const Services = () => {
    return (
        <></>
    )
}