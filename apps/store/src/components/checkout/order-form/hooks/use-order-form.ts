import { useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getCountries } from "../../../../services/countries/get-countries";
import { useAuthStore } from "../../../../stores/auth-store";
import { useOrderStore } from "../../../../stores/order-store";
import { Order, OrderFormValues } from "../../../../types/order";
import { useCartStore } from "../../../../stores/cart-store";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../../../stores/product-store";

export const useOrderForm = () => {
    const [, startTransition] = useTransition();
    const navigate = useNavigate();

    const { user } = useAuthStore((state) => state);
    const { updateStock } = useProductStore((state) => state);
    const { products, getSummary, clean } = useCartStore((state) => state);
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
                    products: products.map((product) => ({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        tax: product.tax,
                        quantity: product.quantity,
                    })),
                };

                addOrder(order);
                toast.success("Order placed successfully!");

                products.forEach(({ id, quantity }) =>
                    updateStock(id, quantity)
                );
                clean();
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
