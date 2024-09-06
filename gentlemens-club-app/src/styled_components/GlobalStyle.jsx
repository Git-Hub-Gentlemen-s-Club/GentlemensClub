import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        font-weight: 400;
        font-style: normal;
    }

    body {
    font-family: "Open Sans", sans-serif;
    background-color: black;
    /* overflow-x: hidden; */
};
`;

export default GlobalStyle;