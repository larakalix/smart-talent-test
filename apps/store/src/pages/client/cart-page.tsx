import { NavLink } from "react-router-dom";
import { CartProductCard } from "../../components/cart/cart-product-card";
import { CartSummary } from "../../components/cart/summary";
import { Container } from "../../components/layout/container";
import { useCartStore } from "../../stores/cart-store";

export const CartPage = () => {
    const { products } = useCartStore((state) => state);
    const isEmpty = products?.length === 0;

    return (
        <Container className="p-6 flex flex-col">
            <div className="mx-auto max-w-3xl">
                <header className="text-center pb-8">
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

                        {isEmpty && (
                            <li className="text-center text-gray-600">
                                Your cart is empty.
                            </li>
                        )}
                    </ul>

                    <CartSummary />

                    {!isEmpty && (
                        <div className="w-full mt-8 flex justify-end">
                            <NavLink
                                to="/checkout"
                                className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                            >
                                Checkout
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};
