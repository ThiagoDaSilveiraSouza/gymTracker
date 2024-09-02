import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --dark-color-1: black;
    --dark-color-2: #442b63;
    --ligth-color-1: white;
    --ligth-color-2: #e5bcdd;
  }
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
  a{
    color: black;
    text-decoration: none;
  }

  .page-section{
    padding-left: 80px;
    box-sizing: border-box;
  }

  .centralizer{
    width: 1200px;
    max-width: 95%;
    margin: 0 auto;
  }
`;
