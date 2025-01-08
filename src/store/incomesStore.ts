import { create } from "zustand"
import { persist } from "zustand/middleware"

type IncomesStoreTypes = {
    incomes: IncomesTypes,
    setIncomes: (incomes: IncomesTypes) => void
    setIncome: (income: IncomeTypes) => void
    deleteIncome: (id: string) => void
}

export const incomesStore = create(
    persist<IncomesStoreTypes>(
        (set, get) => ({
            incomes: [],
            setIncomes: (incomes: IncomesTypes) => set({incomes}),
            setIncome: (income: IncomeTypes) => set({ incomes: [...get().incomes, income] }),
            deleteIncome: (id: string) => set({incomes: get().incomes.filter(income => income.id !== id)})
        }),
        {
            name: 'incomes', 
        },
    ),
)