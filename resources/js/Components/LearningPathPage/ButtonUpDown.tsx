import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonUpDown({
    onSomar,
    onSubtrair,
    className,
    ...props
}:{
    onSomar: () => void;
    onSubtrair: () => void;
    className?: string;
}){
    return (
        <div className="flex gap-2 fixed bottom-7 right-7 z-50" {...props}>
                <Button onClick={onSomar} size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button onClick={onSubtrair} size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
    )
}