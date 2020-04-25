import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    /* --yellow: #ffc600; all global variables info fe. colors */
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
  }
  body {
    font-size: 2rem;
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
  }
  ul {
    list-style-type: square;
  }
`

export default GlobalStyle
