import { useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getCountries } from "../../../../services/countries/get-countries";
import { useAuthStore } from "../../../../stores/auth-store";
import { useOrderStore } from "../../../../stores/order-store";
import { Order, OrderFormValues } from "../../../../types/order";
import { useCartStore } from "../../../../stores/cart-store";
import { useNavigate } from "react-router-dom";

export const useOrderForm = () => {
    const [, startTransition] = useTransition();
    const navigate = useNavigate();
    const { user } = useAuthStore((state) => state);
    const { getSummary } = useCartStore((state) => state);
    const { addOrder } = useOrderStore((state) => state);

    const { data, error, isLoading } = useQuery({
        queryKey: ["get-countries"],
        queryFn: getCountries,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });

    const countries = data
        ?.map((country) => ({
            label: country.name.common,
            value: country.cca2,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

    const onSubmit = async (data: OrderFormValues) => {
        if (!user) return;

        try {
            startTransition(() => {
                const { total, totalTaxes } = getSummary();

                const order: Order = {
                    ...data,
                    id: Math.random().toString(36).substr(2, 9),
                    total: total + totalTaxes,
                    createdAt: new Date().toISOString(),
                    products: [],
                };

                addOrder(order);

                toast.success("Order placed successfully!");

                navigate("/");
            });
        } catch (error) {
            console.error(error);
        }
    };

    return {
        user,
        countries,
        error,
        isLoading,
        onSubmit,
    };
};
