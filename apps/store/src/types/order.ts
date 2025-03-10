import { z } from "zod";

export const orderFormSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    address: z.string().nonempty(),
    country: z.string().nonempty(),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;

export const orderSchema = orderFormSchema.merge(
    z.object({
        id: z.string(),
        products: z.array(
            z.object({
                id: z.string(),
                name: z.string(),
                price: z.number(),
                tax: z.number(),
                quantity: z.number(),
            })
        ),
        total: z.number(),
        createdAt: z.string(),
    })
);

export type Order = z.infer<typeof orderSchema>;
