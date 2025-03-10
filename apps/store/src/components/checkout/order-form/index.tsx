import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadProvider } from "../../../providers/load-provider";
import { useOrderForm } from "./hooks/use-order-form";

const orderSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    address: z.string().nonempty(),
    country: z.string().nonempty(),
});

type FormValues = z.infer<typeof orderSchema>;

export const OrderForm = () => {
    const { countries, isLoading, error } = useOrderForm();

    const form = useForm<FormValues>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            name: "",
            email: "",
            address: "",
            country: "",
        },
    });

    return (
        <LoadProvider isLoading={isLoading} error={error}>
            <h1>Purchase form</h1>
        </LoadProvider>
    );
};
