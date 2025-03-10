import { Badge } from "@/Components/ui/badge";
import { Button } from "@headlessui/react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/Components/ui/card";
import { Check } from "lucide-react";
import { title } from "process";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PrincigProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const pricingList: PrincigProps[] = [
    {
        title: "Free",
        popular: 0,
        price: 0,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get Started",
        benefitList: [
            "1 Team member",
            "2 GB Storage",
            "Upto 4 pages",
            "Community support",
            "lorem ipsum dolor"
        ],
    },
    {
        title: "Premium",
        popular: 1,
        price: 5,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
            "4 Team member",
            "4 GB Storage",
            "Upto 6 pages",
            "Priority support",
            "lorem ipsum dolor"
        ],
    },
    {
        title: "Enterprise",
        popular: 0,
        price: 40,
        description: "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
            "10 Team member",
            "16 GB Storage",
            "Upto 10 pages",
            "Priority support",
            "lorem ipsum dolor"
        ],
    },
]

export const Pricing = () => {
    return (
        <section
            id="pricing"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Get
                <span className="bg-gradient-to-b from-primary/60 to-primary">
                    {" "}
                    Unlimited{" "}
                </span>
                Access
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                reiciendis.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingList.map((pricing: PrincigProps) => (
                    <Card
                        key={pricing.title}
                        className=""
                    >

                    </Card>
                ))}
            </div>
        </section>
    )
}