import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --white: #FFFFFF;

        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --red: #E62E4D;

        --title: #363F5F;
        --text: #969CB3;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    p span button{
        font-weight: 400;
    }

    h1 h2 h3 h4 h5 strong{
        font-weight: 600;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: #F0F2F5;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`