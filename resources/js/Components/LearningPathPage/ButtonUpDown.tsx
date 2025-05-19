import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonUpDown({
    disabledUp,
    disabledDown,
    upQuestion,
    downQuestion,
    className,
    ...props
}:{
    disabledUp: boolean,
    disabledDown: boolean,
    upQuestion: () => void,
    downQuestion: () => void,
    className?: string;
}){
    return (
        <div className="flex gap-2 fixed bottom-7 right-7 z-50" {...props}>
                <Button onClick={upQuestion} disabled={disabledUp} size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button onClick={downQuestion} disabled={disabledDown} size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
    )
}