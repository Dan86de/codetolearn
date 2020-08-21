import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --fontH1: 59px;
    --fontH2: 37px;
    --fontH3: 23px;
    --fontBody: 1em;
    --fontSmall: 0.8em;
    --mainColor: #0B1326;
    --secondaryColor: #2C4D99;
    --mainGray: #5C616E;
    --secondaryGray : #ADB0B6;
    --textOnMain: #E6EAF2;
    @media only screen and (min-width: 768px) {
      --fontH1: 76px;
      --fontH2: 47px;
      --fontH3: 29px;
      --fontBody: 1em;
      --fontSmall: 0.8em;
    }
  }
  html {
    box-sizing: border-box;  
  }
  body {
    width:100%;
    line-height: 1.65;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: var(--mainColor);
    font-family: aktiv-grotesk, sans-serif;
    font-weight: 500;
    font-style: normal;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    position: ${props => (!props.scroll ? "static" : "fixed")};
    overflow-y: ${props => (!props.scroll ? "auto" : "scroll")};
   
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 2.75rem 0 1.05rem;
  }
  h1 {
    font-size: var(--fontH1);
  }
  h2 {
    font-size: var(--fontH2);
  }
  h3 {
    font-size: var(--fontH3);
  }
  p {
    font-size: var(--fontBody);
    margin-bottom:1.15rem;
  }
  a {
    color: inherit;
  }
  p, ul, ol {
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: square;
  }
  input, input::placeholder {
    font-family: aktiv-grotesk, sans-serif;
    font-size: 1rem;
  }
  .contentWrapper {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    @media only screen and (min-width: 768px) {
      padding: 0;
      max-width: 708px;
    }
    @media only screen and (min-width: 1024px) {
      max-width: 924px;
    }
    @media only screen and (min-width: 1280px) {
      max-width: 1180px;
    }
    @media only screen and (min-width: 1920px) {
      max-width: 1540px;
    }
  }
`

export default GlobalStyle
