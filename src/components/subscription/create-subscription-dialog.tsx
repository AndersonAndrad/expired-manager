'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Check, Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {SubscriptionSchema} from "@/core/forms/subscription.form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

export default function CreateSubscriptionDialog() {
    const form = useForm<z.infer<typeof SubscriptionSchema>>({
        resolver: zodResolver(SubscriptionSchema),
        defaultValues: {
            name: '',
            email: '',
            description: '',
            value: 0,
            payed: false,
            startDate: new Date(),
        }
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Nova assinatura <Plus/></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Registrar assinatura</DialogTitle>
                    <DialogDescription>
                        Quando vocês registrar a assinatura, manteremos você informado sobre todas as atualizações
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    {/* name */}
                    <FormField
                        control={form.control}
                        name={'name'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder={'Qual o nome da sua assinatura ?'} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* email */}
                    <FormField
                        control={form.control}
                        name={'email'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder={'Qual email está registrado a sua assinatura ?'} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* value */}
                    <FormField
                        control={form.control}
                        name={'value'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Valor</FormLabel>
                                <FormControl>
                                    <Input placeholder={'Qual o valor da sua assinatura ? '} {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Paid */}
                    <FormField
                        control={form.control}
                        name={'name'}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <div className={'flex items-center gap-3'}>
                                        <Switch id={'paid'} {...field}/>
                                        <Label htmlFor={'paid'} className={'cursor-pointer'}>Já foi pago ?</Label>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* description */}
                    <FormField
                        control={form.control}
                        name={'description'}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Descrição</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className={'resize-none h-3'}
                                        placeholder={'Gostaria de adicionar algum comentário sobre essa incrição ?'} {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </Form>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={'ghost'}>Cancelar</Button>
                    </DialogClose>
                    <Button>Registrar <Check/></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}