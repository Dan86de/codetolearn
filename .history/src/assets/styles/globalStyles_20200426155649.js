import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    /* --blue: royalblue; all global variables info fe. colors */
    --fontH1: 36,62pt;
    --fontH2: 29,3pt;
    --fontH3: 23,44pt;
    --fontH4: 18,75pt;
    --fontH5: 15pt;
    --fontBody: 16pt;
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
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.5;
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
