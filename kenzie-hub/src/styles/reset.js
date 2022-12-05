import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    select:focus,input:focus,textare:focus{
        outline: 0;
        border: 0;
        box-shadow: none;
    }
`;
