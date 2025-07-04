import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../Icons";

interface FeaturesProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeaturesProps[] = [
    {
        icon: <MedalIcon />,
        title: "Acessibilidade",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: <MapIcon />,
        title: "Comunidade",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: <PlaneIcon />,
        title: "Escabilidade",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
        icon: <GiftIcon />,
        title: "Gamificação",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center mx-auto px-5 md:px-24 py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                How It{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Works{" "}
                </span>
                Step-by-Step Guide
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis dolor pariatur sit!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeaturesProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
