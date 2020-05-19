import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --fontH1: 1.728em;
    --fontH2: 1.44em;
    --fontH3: 1.33em;
    --fontH4: 1.22em;
    --fontH5: 1.11em;
    --fontBody: 1em;
    @media only screen and (min-width: 768px) {
      --fontH1: 2.488em;
      --fontH2: 2.074em;
      --fontH3: 1.728em;
      --fontH4: 1.44em;
      --fontH5: 1.2em;
      --fontBody: 1em;
  }
    
    --mainColor: #1C1C1C;
    --textOnMain: #E2E2E2;

}
  html {
    box-sizing: border-box;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
  }
  body {
    font-weight: 400;
    line-height: 1.65;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: var(--mainColor);
    @media only screen and (min-width: 768px) {
      font-size: 18px;
  }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin: 2.75rem 0 1.05rem;
    padding:0;
    line-height: 1.15;
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
  h4 {
    font-size: var(--fontH4);
  }
  h5 {
    font-size: var(--fontH5);
  }
  p {
    font-size: var(--fontBody);
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
    font-family: 'Varela Round';
    font-size:1rem;
  }
`

export default GlobalStyle
