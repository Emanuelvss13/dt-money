import React, { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style'
import CloseImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../service/api'

interface NewTransactionProps{
    isOpen: boolean
    onRequestClose: () => void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {
    
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('deposit')
    const [category, setCategory] = useState('')

    function handleNewTransaction(e: FormEvent){
        e.preventDefault()
        const data = {title, value, type, category}

        api.post('/transactions', data)
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
                    value={value}
                    onChange={ e => setValue(Number(e.target.value))}
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
