import {z} from "zod";

export const SingingSchema = z.object({
    name: z
        .string()
        .min(3, {message: 'O nome deve ter pelo menos 3 caracteres'})
        .max(100, {message: 'O nome só pode ter até 100 caracteres'}),
    email: z.string().email({message: 'Seu email não é válido'}),
    password: z
        .string()
        .min(8, {message: 'A senha deve ter no minimo 8 caracteres'})
        .max(62, {message: 'A senha só pode ter até 62 caracteres'}),
    confirmPassword: z
        .string()
        .min(8, {message: 'A senha deve ter no minimo 8 caracteres'})
        .max(62, {message: 'A senha só pode ter até 62 caracteres'}),
});