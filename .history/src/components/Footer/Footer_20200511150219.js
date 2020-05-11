import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--mainColor);
  color: var(--textOnMain);
  height: 100px;
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>Prawa autorskie @ codetolearn.pl 2020</h5>
    </FooterWrapper>
  )
}

export default Footer
