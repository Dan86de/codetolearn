import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--mainColor);
  color: var(--textOnMain);
  height: 50px;
  display: flex;
  align-items: center;
  p {
  }
`

const FooterContentWrapper = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <p>Prawa autorskie @ codetolearn.pl 2020</p>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
