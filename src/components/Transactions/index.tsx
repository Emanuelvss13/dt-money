import { useContext, useEffect, useState } from "react";
import { api } from "../../service/api";
import { TransactionConxtext } from "../../TransacrionContext";
import { Container } from "./style";

interface TransactionsProps{
    id: number
    title: string
    amount: number
    category: string
    type: string
    createdAt: string
}

export default function Transactions() {
    const data = useContext(TransactionConxtext)

    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id} >
                            <td>{transaction.title}</td>
                            <td className={transaction.type} >{transaction.type === 'withdraw' && '-'}
                                {
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {
                                    new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
