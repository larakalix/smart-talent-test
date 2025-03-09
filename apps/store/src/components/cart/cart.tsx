import { Button } from "@acme/ui/components";
import { CartProvider } from "../../providers/cart-provider";
import { useCartStore } from "../../stores/cart-store";
import { NavLink } from "react-router-dom";

export const Cart = () => {
    const { getTotal } = useCartStore((state) => state);

    const total = getTotal();

    return (
        <CartProvider>
            <NavLink to="/cart">View my cart ({total.total})</NavLink>
        </CartProvider>
    );
};
