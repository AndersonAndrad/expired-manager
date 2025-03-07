import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign } from "lucide-react";

import CreateSubscriptionDialog from "@/components/subscription/create-subscription-dialog";
import DeleteSubscriptionAlert from "@/components/subscription/delete-subscription-alert";
import { PageTemplate } from "@/components/templates/page.template";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscriptions } from "@/core/mock/subscriptions.mock";
import { formatDate } from "@/core/utils/date.utils";

export default function Subscription() {
    return (
        <PageTemplate>
            <div>
                <header className={'flex items-center justify-between'}>
                    <h1>Assinaturas</h1>
                    <div className={'flex items-center gap-3 w-2/5 '}>
                        <Input placeholder={'Qual o nome da sua assinatura ?'} />
                        <CreateSubscriptionDialog />
                    </div>
                </header>

                <main>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Inicio</TableHead>
                                <TableHead>Fim</TableHead>
                                <TableHead>Valor</TableHead>
                                <TableHead>Pago</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {subscriptions.map((subscription) => (
                                <TableRow key={subscription._id}>
                                    <TableCell>{subscription.name}</TableCell>
                                    <TableCell>{subscription.email}</TableCell>
                                    <TableCell>{formatDate(subscription.start)}</TableCell>
                                    <TableCell>{formatDate(subscription?.end)}</TableCell>
                                    <TableCell>R$100,00</TableCell>
                                    <TableCell>{subscription.payed ? 'Sim' : 'Não'}</TableCell>
                                    <TableCell className={'flex items-center gap-3'}>
                                        <Button variant={'secondary'}><DollarSign /></Button>
                                        <DeleteSubscriptionAlert />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </main>
            </div>
        </PageTemplate>
    )
}