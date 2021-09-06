import { useEffect } from "react";
import { Container } from "./style";

export default function Transactions() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then( response => response.json())
        .then(data => console.log(data))
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit" >R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>06/09/2021</td>
                    </tr>
                    
                    <tr>
                        <td>Comida</td>
                        <td className="withdraw" >- R$150,00</td>
                        <td>Pessoal</td>
                        <td>06/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
