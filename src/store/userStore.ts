import { create } from "zustand"
import { persist } from "zustand/middleware"

type UserStoreTypes = {
    user: UserTypes | null
    setUser: (user: UserTypes | null) => void
}

export const userStore = create(
    persist<UserStoreTypes>(
        (set) => ({
            user: null,
            setUser: (user: UserTypes | null) => set({user})
        }),
        {
            name: 'user ', 
        },
    ),
)