import { createGlobalStyle } from 'styled-components';

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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  body {
    font-family: "Open Sans", sans-serif;
    background-color: black;
  }
`;

export default GlobalStyle;
