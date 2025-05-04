import { Link } from "@inertiajs/react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export function BackButton({page, ...props}: {page: string}){
    return (
        <Link
            href={route(page)}
            {...props}
            className={cn(buttonVariants(
                {variant: "destructive", size: "xs"}
            ))}
        >
            <ArrowLeft/>
        </Link>
    )
}