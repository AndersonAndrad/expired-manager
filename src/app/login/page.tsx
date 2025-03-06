'use client'

import {loginSchema} from "@/core/forms/login.form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <div className={'col-span-full flex justify-center items-center'}>
            <Form {...form}>
                <div className={' w-1/4 flex flex-col gap-4'}>
                    <div>
                        <h1 className={'text-1xl font-semibold'}>Acesse e gerencie suas assinaturas</h1>
                        <h3 className={'text-sm opacity-60'}>Ao acessar você tem todo o controle das suas
                            assinaturas</h3>
                    </div>

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

                    <Button>Entrar</Button>

                    <div className={'flex items-center gap-4 justify-center mt-4'}>
                        <span className={'text-sm opacity-75'}>Não tem uma conta?</span>
                        <Button
                            variant={'outline'}
                            onClick={() => {
                                router.push('/singin')
                            }}
                        >
                            Registrar-se
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}