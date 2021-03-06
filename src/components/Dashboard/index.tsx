import React from 'react'
import { Container } from './style'

import Summary from '../Summary'
import Transactions from '../Transactions'

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <Transactions/>
        </Container>
    )
}
