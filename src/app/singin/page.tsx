'use client'

import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Eye, EyeOff} from "lucide-react";
import {SingingSchema} from "@/core/forms/singing.form";

export default function SingingPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof SingingSchema>>({
        resolver: zodResolver(SingingSchema),
        defaultValues: {
            name: '',
            email: "",
            password: "",
            confirmPassword: '',
        }
    })

    return (
        <div className={'col-span-full flex justify-center items-center'}>
            <Form {...form}>
                <div className={' w-1/4 flex flex-col gap-4'}>
                    <div>
                        <h1 className={'text-1xl font-semibold'}>Seja muito bem vindo</h1>
                        <h3 className={'text-sm opacity-60'}>Ao criar sua conta você tem acesso a uma vasta ferramenta
                            para administração das suas assinaturas</h3>
                    </div>

                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Qual o nome que devemos te chamar ? " {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Qual o email vai usar no login ?" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl className={'flex items-center gap-4'}>
                                    <div>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            maxLength={62}
                                            placeholder="Vamos manter em segredo"
                                            {...field}
                                        />

                                        <Button
                                            variant={'secondary'}
                                            onClick={() => {
                                                setShowPassword(!showPassword)
                                            }}
                                        >
                                            {showPassword && <Eye/>}
                                            {!showPassword && <EyeOff/>}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirme sua senha</FormLabel>
                                <FormControl className={'flex items-center gap-4'}>
                                    <div>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            maxLength={62}
                                            placeholder="Confirme sua senha"
                                            {...field}
                                        />

                                        <Button
                                            variant={'secondary'}
                                            onClick={() => {
                                                setShowPassword(!showPassword)
                                            }}
                                        >
                                            {showPassword && <Eye/>}
                                            {!showPassword && <EyeOff/>}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <Button>Criar conta</Button>

                    <div className={'flex items-center gap-4 justify-center mt-4'}>
                        <span className={'text-sm opacity-75'}>Já tem uma conta ?</span>
                        <Button
                            variant={'outline'}
                            onClick={() => {
                                router.push('/login')
                            }}
                        >
                            Fazer login
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}