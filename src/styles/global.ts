import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: rgba(18, 18, 20, 0.97);
    --primary: rgb(255, 255, 255);
    --purple: rgb(130, 87, 230);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--primary);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--primary);
  }

  button {
    cursor: pointer;
  }
`;
