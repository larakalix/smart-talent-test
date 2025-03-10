import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartProduct, Product } from "../types/product";

type StateProps = {
    products: CartProduct[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: string) => void;
    getTotal: () => {
        total: number;
        quantity: number;
    };
    getSummary: () => {
        total: number;
        totalTaxes: number;
    };
    cartHasProduct: (id: string, max: number) => boolean;
    clean: () => void;
};

export const useCartStore = create<StateProps>()(
    persist(
        (set, get) => ({
            products: [],
            clean: () => set({ products: [] }),
            cartHasProduct: (id: string, max: number) => {
                const product = get().products.find(
                    (product) => product.id === id
                );

                if (!product) return false;

                return product.quantity === max;
            },
            addToCart: (item) => {
                const product = get().products.find(
                    (product) => product.id === item.id
                );

                if (product) {
                    return set((state) => ({
                        products: state.products.map((product) =>
                            product.id === item.id
                                ? { ...product, quantity: product.quantity + 1 }
                                : product
                        ),
                    }));
                }

                return set((state) => ({
                    products: [...state.products, { ...item, quantity: 1 }],
                }));
            },
            removeFromCart: (id: string) => {
                const product = get().products.find(
                    (product) => product.id === id
                );

                if (product && product.quantity > 1) {
                    return set((state) => ({
                        products: state.products.map((product) =>
                            product.id === id
                                ? { ...product, quantity: product.quantity - 1 }
                                : product
                        ),
                    }));
                }

                return set((state) => ({
                    products: state.products.filter(
                        (product) => product.id !== id
                    ),
                }));
            },
            getTotal: () =>
                get().products.reduce(
                    (acc, product) => ({
                        total: acc.total + product.quantity,
                        quantity: acc.quantity + 1,
                    }),
                    { total: 0, quantity: 0 }
                ),
            getSummary: () => {
                const products = get().products;

                return products.reduce(
                    (acc, { price, tax, quantity }) => {
                        acc.total += price * quantity;
                        acc.totalTaxes += tax * quantity;
                        return acc;
                    },
                    { total: 0, totalTaxes: 0 }
                );
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
