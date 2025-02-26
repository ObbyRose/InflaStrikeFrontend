import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    cryptoCoins: {currency: string, amount: number}[];
    avatar?: string;
}

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: "user-storage",
        }
    )
);
