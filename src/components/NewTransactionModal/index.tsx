import React from 'react'
import Modal from 'react-modal'

interface NewTransactionProps{
    isOpen: boolean
    onRequestClose: () => void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar Transação</h2>
        
        </Modal>
    )
}
