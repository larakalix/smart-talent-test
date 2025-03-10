import { OrderForm } from "../../components/checkout/order-form";
import { Container } from "../../components/layout/container";

export const CheckoutPage = () => {
    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto max-w-5xl">
                <header className="text-center pb-8">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Checkout
                    </h1>
                </header>

                <OrderForm />
            </div>
        </Container>
    );
};
