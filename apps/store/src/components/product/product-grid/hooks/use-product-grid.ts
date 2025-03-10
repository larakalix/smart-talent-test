import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../../../../stores/product-store";
import { getProducts } from "../../../../services/products/get-products";
import { useEffect } from "react";

export const useProductGrid = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-products"],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });
    const { products } = useProductStore((state) => state);

    useEffect(() => {
        useProductStore.setState({
            products: data,
        });
    }, [data]);

    return { products, error, isLoading };
};
