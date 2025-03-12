import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Order } from "../types/order";

type StateProps = {
    orders: Order[];
    addOrder: (order: Order) => void;
    getOrdersByUser: (email: string) => Order[];
};

export const useOrderStore = create<StateProps>()(
    persist(
        (set, get) => ({
            orders: [],
            addOrder: (order) => {
                set((state) => ({
                    orders: [...state.orders, order],
                }));
            },
            getOrdersByUser: (email) => {
                return get().orders.filter((order) => order.email === email);
            },
        }),
        {
            name: "order-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
