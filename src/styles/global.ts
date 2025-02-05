import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.primary}
    }

    body{
        background: ${(props) => props.theme['gray-50']};
        color: ${(props) => props.theme['neutral-2']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;
    }

    h1, h2, h3{
        font-family: "League Spartan", sans-serif;
    }

    body, input, textarea, button, p, span{
        font-family: "Raleway", sans-serif;
    }

    *::-webkit-scrollbar {
        width: 7px;
        height: 7px; 
    }

    *::-webkit-scrollbar-track {
        background: ${(props) => props.theme['gray-850']};
        padding: 2px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['gray-600']};
    }

    img{
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    a{
        text-decoration: none;
        color: inherit;
        padding: 0.2rem;
        border-radius: 4px;
    }

    button{
        cursor: pointer;

        transition: all 0.3s;
    }

    button:disabled,
    input:read-only,
    input:disabled,
    select:disabled {
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
        /* Se 16px = 1rem = 100%, 14px = ? */
        html {
            font-size: 87.5%;
        }
    }
`
