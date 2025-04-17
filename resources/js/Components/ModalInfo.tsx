import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog"
import { useState } from "react"

interface ModalALertProps {
    className? : string
    title?: string,
    status?: string
}

export function ModalInfo ({
    className,
    status,
    title,
    ...props
}: ModalALertProps){

    console.log(status)

    const [open, setOpen] = useState(!status ? false : true) // se o status chegar declarado, exibe uma modal com a mensagem

    return (
        <AlertDialog open={open}>
                <AlertDialogContent className={className}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {status}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setOpen(!open)}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
    )
} 