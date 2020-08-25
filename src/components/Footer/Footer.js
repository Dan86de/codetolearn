import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterWrapper = styled.div`
  background-color: var(--mainColor);
  color: var(--textOnMain);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  padding: 25px 0;
  @media only screen and (min-width: 768px) {
    padding: 50px 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 75px 0;
  }
`

const BrandWrapper = styled.div`
  z-index: 995;
  margin: 0;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--mainGray);
  }
`

const LogoPlaceholder = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 48px;
  border: 3px solid var(--mainGray);
  border-radius: 5px;
  span {
    font-size: 20px;
    line-height: 39px;
    letter-spacing: 0.1em;
    font-weight: 800;
    padding-left: 2px;
    transform: translateY(1px);
  }
`

const BrandTextWrapper = styled.div`
  z-index: 999;
  flex-direction: column;
  display: none;
  transform: translateY(2px);
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-size: var(--fontH3);
  }
  span {
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--mainGray);
    letter-spacing: 0.3em;
  }
`

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper className={"contentWrapper"}>
        <BrandWrapper>
          <Link to="/" exact="true">
            <LogoPlaceholder>
              <span>PF</span>
            </LogoPlaceholder>
            <BrandTextWrapper>
              <h2>Programistafrontend.pl</h2>
              <span>Web Developer Daniel Noworyta</span>
            </BrandTextWrapper>
          </Link>
        </BrandWrapper>
        <p>Prawa autorskie @ programistafrontend.pl 2020</p>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
