/* eslint-disable no-empty-pattern */
import { useAuthStore } from "../../../stores/auth-store";
import type { Product } from "../../../types/product";

export const useProductCard = ({}: { product: Product }) => {
    const { isClientAuthenticated } = useAuthStore((state) => state);

    const handleAddToCart = (product: Product) => {
        console.log("Add to cart", product);
    };

    const allowPurchase = isClientAuthenticated();

    return { allowPurchase, handleAddToCart };
};
