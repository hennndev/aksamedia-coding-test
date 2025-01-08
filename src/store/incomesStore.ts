import { create } from "zustand"
import { persist } from "zustand/middleware"

type IncomesStoreTypes = {
    incomes: IncomesTypes,
    setIncome: (income: IncomeTypes) => void
}

export const useGroupStore = create(
    persist<IncomesStoreTypes>(
        (set, get) => ({
            incomes: [],
            setIncome: (income: IncomeTypes) => set({ incomes: [...get().incomes, income] }),
        }),
        {
            name: 'incomes', 
        },
    ),
)