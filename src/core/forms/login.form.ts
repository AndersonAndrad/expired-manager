import {z} from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .email({message: 'Seu email não é válido'}),
    password: z
        .string()
        .min(8, {message: 'A senha deve ter no minimo 8 caracteres'})
        .max(62, {message: 'O tamanho máximo é de 62 caracteres'}),
})