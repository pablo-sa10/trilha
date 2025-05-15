import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type SummaryProps = {
    title: string;
    quantity: number;
    icon: LucideIcon;
}

export function SummaryCards({title, quantity, icon: Icon}: SummaryProps){
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{quantity}</div>
            </CardContent>
        </Card>
    )
}