import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "../types/user";

type StateProps = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    isClientAuthenticated: () => boolean;
};

export const useAuthStore = create<StateProps>()(
    persist(
        (set, get) => ({
            user: null,
            login: (user: User) => set(() => ({ user })),
            logout: () => set(() => ({ user: null })),
            isClientAuthenticated: () => {
                const user = get().user;

                return user?.role === "user";
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
