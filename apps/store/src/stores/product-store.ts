import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "../types/product";
import { MOCK_PRODUCTS } from "../data/products";

type StateProps = {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (id: string) => void;
};

export const useProductStore = create<StateProps>()(
    persist(
        (set) => ({
            products: MOCK_PRODUCTS,
            addProduct: (product: Product) =>
                set((state) => ({ products: [...state.products, product] })),
            deleteProduct: (id: string) =>
                set((state) => ({
                    products: state.products.filter(
                        (product) => product.id !== id
                    ),
                })),
        }),
        {
            name: "product-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
