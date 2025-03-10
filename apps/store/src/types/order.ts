import { z } from "zod";

export const orderSchema = z.object({
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
});

export type Order = z.infer<typeof orderSchema>;
