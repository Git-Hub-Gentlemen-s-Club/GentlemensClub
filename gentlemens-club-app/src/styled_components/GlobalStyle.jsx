import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Open Sans", sans-serif;
        background-color: black;
        /* overflow-x: hidden; */
    };

    .icons {
        font-size: 2rem;
        padding: 5px;
    }
`;

export default GlobalStyle;