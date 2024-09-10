import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

<<<<<<< HEAD
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
=======
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  body {
    font-family: "Open Sans", sans-serif;
    background-color: black;
  }
>>>>>>> loginScreen

    .icons {
        font-size: 2rem;
        padding: 5px;
    }
`;

export default GlobalStyle;
