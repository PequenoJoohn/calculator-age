import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --purple:hsl(259, 100%, 65%);
    --light-red: hsl(0, 100%, 67%);
    --white: hsl(0, 0%, 100%);
    --off-white: hsl(0, 0%, 94%);
    --light-grey: hsl(0, 0%, 86%);
    --smokey-grey:hsl(0, 1%, 44%);
    --off-black:  hsl(0, 0%, 8%);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

input {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
}
`;

export default GlobalStyle;
