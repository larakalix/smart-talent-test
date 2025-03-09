import type { PropsWithChildren } from "react";
import { useAuthStore } from "../stores/auth-store";

type Props = PropsWithChildren;

export const CartProvider = ({ children }: Props) => {
    const { isClientAuthenticated } = useAuthStore((state) => state);

    if (!isClientAuthenticated()) {
        return null;
    }

    return <>{children}</>;
};
