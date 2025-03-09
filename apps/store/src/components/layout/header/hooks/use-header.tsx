import { useAuthStore } from "../../../../stores/auth-store";

type RouteItem = {
    id: string;
    name: string;
    path: string;
};

export const useHeader = () => {
    const { user, logout } = useAuthStore((state) => state);

    const routesByRole = new Map<string, RouteItem[]>([
        ["admin", [{ name: "Orders", path: "/orders", id: "orders" }]],
        [
            "user",
            [
                { name: "Cart", path: "/cart", id: "cart" },
                { name: "Checkout", path: "/checkout", id: "checkout" },
            ],
        ],
    ]);

    const handleLogout = () => {
        console.log("Logout");
        logout();
    };

    return {
        user,
        routes: routesByRole.get(user?.role ?? "") ?? [],
        handleLogout,
    };
};
