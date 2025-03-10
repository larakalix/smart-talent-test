import { toast } from "sonner";
import { useAuthStore } from "../../../../stores/auth-store";
import { useCartStore } from "../../../../stores/cart-store";
import type { Product } from "../../../../types/product";

export const useProductCard = () => {
    const { isClientAuthenticated } = useAuthStore((state) => state);
    const { addToCart, cartHasProduct } = useCartStore((state) => state);

    const handleAddToCart = (product: Product) => {
        addToCart(product);

        toast.success("Product added to cart");
    };

    const allowPurchase = isClientAuthenticated();

    return { allowPurchase, cartHasProduct, handleAddToCart };
};
