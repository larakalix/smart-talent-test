import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Order } from "../types/order";

type StateProps = {
    orders: Order[];
    addOrder: (order: Order) => void;
};

export const useOrderStore = create<StateProps>()(
    persist(
        (set) => ({
            orders: [],
            addOrder: (order) => {
                set((state) => ({
                    orders: [...state.orders, order],
                }));
            },
        }),
        {
            name: "order-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
