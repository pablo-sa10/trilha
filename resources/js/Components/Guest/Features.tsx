import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

import image from "@images/growth.png";
import image3 from "@images/reflecting.png";
import image4 from "@images/looking-ahead.png";

interface FeaturesProps {
    title: string;
    description: string;
    image: string;
}

const FeaturesList: string[] = [
    "Dark/Light theme",
    "Reviews",
    "Features",
    "Pricing",
    "Contact form",
    "Our team",
    "Responsive design",
    "Newsletter",
    "Minimalist",
];

const features: FeaturesProps[] = [
    {
        title: "Design responsivo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        image: image4,
    },
    {
        title: "Interface intuitiva",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        image: image3,
    },
    {
        title: "Design responsivo",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        image: image,
    },
];

export const Features = () => {
    return (
        <section
            id="features"
            className="container mx-auto px-5 md:px-24 py-24 sm:py-32 space-y-8"
        >
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Many{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Great Features
                </span>
            </h2>

            <div className="flex flex-wrap md:justify-center gap-4">
                {FeaturesList.map((feature: string) => (
                    <div key={feature}>
                        <Badge variant="secondary" className="text-sm">
                            {feature}
                        </Badge>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(
                    ({ title, description, image }: FeaturesProps) => (
                        <Card key={title}>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent>{description}</CardContent>

                            <CardFooter>
                                <img
                                    src={image}
                                    alt="About feature"
                                    className="w-[200px] lg:w-[300px] mx-auto"
                                />
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
