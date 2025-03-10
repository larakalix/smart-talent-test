import { toast } from "sonner";
import { CartProduct } from "../../../types/product";
import { useCartStore } from "../../../stores/cart-store";

export const useCart = () => {
    const { removeFromCart } = useCartStore((state) => state);

    const handleDeleteFromCart = (product: CartProduct) => {
        removeFromCart(product.id);

        toast.success("Product removed from cart");
    };

    return { handleDeleteFromCart };
};
