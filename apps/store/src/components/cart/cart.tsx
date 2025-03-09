import React from "react";
import { useAuthStore } from "../../stores/auth-store";

export const Cart = () => {
    const { isClientAuthenticated } = useAuthStore((state) => state);

    if (!isClientAuthenticated()) {
        return null;
    }

    return <div>Cart</div>;
};
