import { Container } from "../../components/layout/container";

export const CheckoutPage = () => {
    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Checkout
                    </h1>
                </header>
            </div>
        </Container>
    );
};
