import {z} from "zod";

export const SubscriptionSchema = z.object({
    name: z
        .string()
        .min(2, {message: 'O nome deve ter pelo menos 2 caracteres'})
        .max(150, {message: 'O nome deve ter no máximo 150 caracteres'}),
    email: z
        .string()
        .email({message: 'O email não é válido'}),
    description: z
        .string()
        .max(250, {message: 'A descrição não pode passar de 250 caracteres'}),
    value: z
        .number(),
    startDate: z
        .date(),
    endDate: z
        .date(),
    payed: z
        .boolean()
})