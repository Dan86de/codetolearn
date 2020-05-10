import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --fontH1: 1.4em;
    --fontH2: 1.2em;
    --fontH3: 0.9em;
    --fontH4: 0.75em;
    --fontH5: 0.6em;
    --fontBody: 0.5em;
    @media only screen and (min-width: 600px) {
    --fontH1: 2.8019em;
    --fontH2: 2.4413em;
    --fontH3: 1.953em;
    --fontH4: 1.563em;
    --fontH5: 1.25em;
    --fontBody: 1em;
  }
}
  }
  html {
    box-sizing: border-box;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: #1C1C1C;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.5;
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
  }
  p, ul, ol {
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: square;
  }
`

export default GlobalStyle
