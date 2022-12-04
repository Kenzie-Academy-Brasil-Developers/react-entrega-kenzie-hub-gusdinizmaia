import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    font-family:'Inter', sans-serif;
}

body,#root{
    min-height: 100vh;
    min-width: 380px;
    width: 100vw;
    max-width: 100%;

    background-color: black;
}

#root{
display: flex;
flex-direction: column;
}

:root{

    --color-primary-1:#FF577F;
    --color-primary-2:#FF427F;
    --color-primary-negative:#59323F;
    /* --color-secondary-2:#93D7AF;
    */

    --color-white:#FFFFFF;

    --color-grey-0:#F8F9FA;
    --color-grey-1:#868E96;
    --color-grey-2:#343B41;
    --color-grey-3:#212529;
    --color-grey-4:#121214;

    --radius:6px;

    --color-negative:#E83F5B;
    --color-warning:#FFCD07;
    --color-sucess:#3FE864;
    --color-information:#155BCB;

    --font-title-1:700 28px Inter, sans-serif;
    --font-title-2:600 1.125rem Inter, sans-serif;
    --font-title-3:500 1rem Inter, sans-serif;
    --font-headline:normal 0.75rem Inter, sans-serif;
    --font-headline-bold:bold 0.75rem Inter, sans-serif;
    --font-headline-italic:italic 0.75rem Inter, sans-serif;
}

.dark__mode{
    --color-grey-1:#F5F5F5;
    --color-grey-2:#E0E0E0;
    --color-grey-3:#828282;
    --color-grey-4:#333333;
    
}

`;
