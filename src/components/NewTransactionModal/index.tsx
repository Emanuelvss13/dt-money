import React from 'react'
import Modal from 'react-modal'
import { Container } from './style'
import CloseImg from '../../assets/close.svg'

interface NewTransactionProps{
    isOpen: boolean
    onRequestClose: () => void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {
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

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        
        </Modal>
    )
}
