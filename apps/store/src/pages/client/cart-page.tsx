import { CartProductCard } from "../../components/cart/cart-product-card";
import { CartSummary } from "../../components/cart/summary";
import { Container } from "../../components/layout/container";
import { useCartStore } from "../../stores/cart-store";

export const CartPage = () => {
    const { products } = useCartStore((state) => state);

    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Your Cart
                    </h1>
                </header>

                <div className="mt-8">
                    <ul className="space-y-4">
                        {products.map((product) => (
                            <CartProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ul>

                    <CartSummary />
                </div>
            </div>
        </Container>
    );
};
