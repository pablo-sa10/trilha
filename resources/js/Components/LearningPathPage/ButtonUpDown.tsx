import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonUpDown({
    className,
    ...props
}:{
    className?: string;
}){
    return (
        <div className="flex gap-2 fixed bottom-4 right-4 z-50" {...props}>
                <Button size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
    )
}