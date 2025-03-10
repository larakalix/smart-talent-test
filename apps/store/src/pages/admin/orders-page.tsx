import { Container } from "../../components/layout/container";
import { OrderGrid } from "../../components/order/order-grid";

export const OrdersPage = () => {
    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto w-full px-8">
                <header className="text-center pb-8">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Orders
                    </h1>
                </header>

                <OrderGrid />
            </div>
        </Container>
    );
};
