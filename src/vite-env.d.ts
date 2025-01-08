/// <reference types="vite/client" />


type IncomesTypes = Array<IncomeType>
interface IncomeTypes {
    id: string
    incomeName: string
    incomeType: string
    incomeAmount: number
    incomeDate: Date
    incomeDescription: string
}