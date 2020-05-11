import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--mainColor);
  color: var(--textOnMain);
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Prawa autorskie @ codetolearn.pl 2020</p>
    </FooterWrapper>
  )
}

export default Footer
