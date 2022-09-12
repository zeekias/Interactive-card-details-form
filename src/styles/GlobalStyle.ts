import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');
  
  *, html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
  }
`;
