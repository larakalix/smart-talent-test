import { Container } from "../../../components/layout/container";
import { OrderGrid } from "../../../components/order/order-grid";
import { useAuthStore } from "../../../stores/auth-store";
import { useOrderStore } from "../../../stores/order-store";

export const UserOrderPage = () => {
    const { user } = useAuthStore((state) => state);
    const { getOrdersByUser } = useOrderStore((state) => state);
    const orders = user ? getOrdersByUser(user.email) : [];

    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto w-full px-8">
                <header className="text-center pb-8">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        My Orders
                    </h1>
                </header>
            </div>

            <OrderGrid orders={orders} />
        </Container>
    );
};
