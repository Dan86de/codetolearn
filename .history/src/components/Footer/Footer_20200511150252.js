import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--mainColor);
  color: var(--textOnMain);
  height: 100px;
  display: flex;
  align-items: center;
  p {
    font-size: 1em;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Prawa autorskie @ codetolearn.pl 2020</p>
    </FooterWrapper>
  )
}

export default Footer
