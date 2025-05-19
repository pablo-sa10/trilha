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
        <div className="flex justify-end pr-5 pb-7 gap-2 md:p-0 md:fixed md:bottom-7 md:right-7 md:z-50" {...props}>
                <Button onClick={upQuestion} disabled={disabledUp} size={"icon"} variant={"secondary"}>
                    <ArrowBigUpIcon className="!w-6 !h-6"/>
                </Button>
                <Button onClick={downQuestion} disabled={disabledDown} size={"icon"} variant={"secondary"}>
                    <ArrowBigDownIcon className="!w-6 !h-6"/>
                </Button>
            </div>
    )
}