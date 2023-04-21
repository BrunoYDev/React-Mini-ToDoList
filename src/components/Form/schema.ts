import { z } from "zod";

export const FormSchema = z.object({
    title: z.string().nonempty("Digite um titulo"),
    description: z.string().nonempty("Digite uma descrição"),
})


export type FormValuesT = z.infer<typeof FormSchema>;