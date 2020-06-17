import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  background-color: var(--mainColor);
  color: var(--textOnMain);
  display: flex;
  align-items: center;
`

const FooterContentWrapper = styled.div``

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper className={"contentWrapper"}>
        <p>Prawa autorskie @ codetolearn.pl 2020</p>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
