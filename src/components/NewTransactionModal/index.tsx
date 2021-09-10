import React, { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style'
import CloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionProps{
    isOpen: boolean
    onRequestClose: () => void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {
    
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    const {createTransaction} = useTransactions()

    async function handleNewTransaction(e: FormEvent){
        e.preventDefault()
        
        await createTransaction({title, amount, type, category})
        
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleNewTransaction} >
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={ e => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        color="#33CC95"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        color="#E62E4D"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={ e => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        
        </Modal>
    )
}
