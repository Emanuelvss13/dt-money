import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../service/api'

interface Transactions{
    id: number
    title: string
    amount: number
    category: string
    type: string
    createdAt: string
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProps{
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transactions[]
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionConxtext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({children}: TransactionsProps){
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date() 
        })

        setTransactions([
            ...transactions,
            response.data.transactions
        ])
    }

    return(
        <TransactionConxtext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionConxtext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionConxtext)

    return context
}