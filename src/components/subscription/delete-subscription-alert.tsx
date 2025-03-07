import { AlertDialogAction, AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteSubscriptionAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'}><Trash2 /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Atenção você está deletando uma assinatura, deseja continuar ? </AlertDialogTitle>
          <AlertDialogDescription>Ao deletar uma assinatura não será mais possível acompanhar ela.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant={'ghost'}>Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant={'destructive'}>Deletar <Trash2 /></Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}