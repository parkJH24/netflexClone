import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    body,html{
        background: #333;
    }
    input[type='text']{
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
    }
`

export default GlobalStyle