import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog";

interface ModalAlertProps extends AlertDialogProps {
    onOpenChange: (open: boolean) => void;
    classBtnConfirm?: string;
    classBtnCancel?: string;
    title?: string;
    description?: string;
    onAction?: <T = unknown>() => Promise<T>; // chma a função passada como parametro, pode retornar vazio ou algum dado
}

export function ModalAlert({
    onOpenChange,
    classBtnConfirm,
    classBtnCancel,
    title,
    description,
    onAction,
    ...props
}: ModalAlertProps) {

     const callFunction = async () =>{
        try {
            if (onAction) {
              await onAction();
            }
            onOpenChange(false);
          } catch (error) {
            console.error(error);
            // você poderia também mostrar um toast de erro aqui
          }
    }
    
    return (
        <AlertDialog onOpenChange={onOpenChange} {...props}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={classBtnCancel}>
                        Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className={classBtnConfirm}
                        onClick={callFunction}
                    >
                        Confirmar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
