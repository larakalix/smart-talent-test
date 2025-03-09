import { z } from "zod";

export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    stock: z.number(),
    price: z.number().nonnegative(),
    tax: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export type CartProduct = Pick<Product, "id" | "name" | "price"> & {
    quantity: number;
};
