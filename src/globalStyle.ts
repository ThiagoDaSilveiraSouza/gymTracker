import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
  *{
    font-family: "Poppins", system-ui;
  }
  button{
    cursor: pointer;
  }

  .page-main{
  }

  .centralizer{
    width: 1200px;
    max-width: 95vw;
    margin: 0 auto;
  }
`