import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {DollarSign} from "lucide-react";

export default function MarkSubscriptionPayd() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={'secondary'}><DollarSign/></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Vamos marcar mais uma assinatura como paga ? </AlertDialogTitle>
                    <AlertDialogDescription>Confirmar pagamento da assinatura</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button variant={'ghost'}>Cancelar</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant={'default'}>Marcar como paga <DollarSign/></Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}