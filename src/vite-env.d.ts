/// <reference types="vite/client" />


type IncomesTypes = Array<IncomeType>
interface IncomeTypes {
    incomeName: string
    incomeType: string
    incomeAmount: number
    incomeDate: Date
    incomeDescription: string
}