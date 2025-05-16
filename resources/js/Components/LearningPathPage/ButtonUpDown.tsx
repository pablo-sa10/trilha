import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonUpDown({
    disabledUp,
    disabledDown,
    className,
    ...props
}:{
    disabledUp: boolean,
    disabledDown: boolean,
    className?: string;
}){
    return (
        <div className="flex gap-2 fixed bottom-7 right-7 z-50" {...props}>
                <Button disabled={disabledUp} size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button disabled={disabledDown} size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
    )
}